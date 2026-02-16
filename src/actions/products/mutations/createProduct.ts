"use server"

import { connectToDatabase } from "@/lib/db";
import { uploadToImgBB } from "@/lib/services/imgbb";
import { generateUniqueSlug } from "@/lib/utils/slug";
import {
  validateFile,
  validateId,
  validateNonEmptyString,
  validatePositiveNumber,
} from "@/lib/utils/validators";
import ProductModel from "@/models/ProductModel";
import { Id } from "@/types";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";

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
  const validators = [
    validateNonEmptyString(name, "Product name"),
    validatePositiveNumber(price, "Product price"),
    validateFile(image, "Product image"),
    validateId(categoryId, "Category Id"),
  ];

  for (const v of validators) {
    if (!v.valid) return { success: false, message: v.message };
  }

  try {
    await connectToDatabase();

    const slug = await generateUniqueSlug({ Model: ProductModel, name });

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
