"use server";

import { connectToDatabase } from "@/lib/db";
import { uploadToImgBB } from "@/lib/services/imgbb";
import { isImageFile } from "@/lib/utils/file";
import CategoryModel from "@/models/CategoryModel";
import { updateTag } from "next/cache";
import slugify from "slugify";

export type CreateCategoryPayload = {
  name: string;
  image: File | string;
};

type CreateCategoryResult = {
  success: boolean;
  message: string;
};

const createCategory = async ({
  name,
  image,
}: CreateCategoryPayload): Promise<CreateCategoryResult> => {
  try {
    await connectToDatabase();

    // Basic validation
    if (!name || typeof name !== "string") {
      return {
        success: false,
        message: "Name is required and must be a string",
      };
    }

    if (typeof image === "string" || !isImageFile(image)) {
      return {
        success: false,
        message: "Image is required and must be a valid file",
      };
    }

    // Generate unique slug
    let slug = slugify(name, { lower: true, strict: true });
    let counter = 1;

    while (await CategoryModel.exists({ slug })) {
      slug = `${slug}-${counter++}`;
    }

    // Upload image to ImgBB
    const imageUrl = await uploadToImgBB(image, slug);

    const category = await CategoryModel.create({
      name,
      image: imageUrl,
      slug,
    });

    // Invalidate caches
    updateTag("categories");
    updateTag(`category-${category._id}`);

    return { success: true, message: "Category created" };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Failed to create category" };
  }
};

export default createCategory;
