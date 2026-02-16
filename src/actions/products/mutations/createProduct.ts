import { connectToDatabase } from "@/lib/db";
import { uploadToImgBB } from "@/lib/services/imgbb";
import { isFile } from "@/lib/utils/file";
import ProductModel from "@/models/ProductModel";
import { Id } from "@/types";
import { Types } from "mongoose";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";

interface CreateProductPayload {
  name: string;
  categoryId: Id;
  price: number;
  image: File;
}

export const createProduct = async ({
  name,
  price,
  image,
  categoryId,
}: CreateProductPayload) => {
  // Basic validation
  if (!name || typeof name !== "string") {
    return {
      success: false,
      message: "Name is required and must be a string",
    };
  }

  if (!price || isNaN(Number(price))) {
    return {
      success: false,
      message: "Price is required and must be a number",
    };
  }

  if (!image || !isFile(image)) {
    return {
      success: false,
      message: "Image is required and must be a valid file",
    };
  }

  if (!Types.ObjectId.isValid(categoryId)) {
    return { success: false, message: "Invalid category ID" };
  }

  try {
    await connectToDatabase();

    // Generate unique slug
    const baseSlug = slugify(name, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    while (await ProductModel.exists({ slug })) {
      slug = `${baseSlug}-${counter++}`;
    }

    // Upload image to ImgBB
    const imageUrl = await uploadToImgBB(image, slug);
    await ProductModel.create({
      name,
      slug,
      price: Number(price),
      image: imageUrl,
      category: categoryId,
    });

    // Invalidate cache
    updateTag("products");
  } catch (err) {
    console.error(err);
    return { success: false, message: "Failed to create product" };
  }

  // Redirect after success
  redirect(`/admin/products`);
};
