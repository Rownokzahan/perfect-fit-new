"use server";

import { connectToDatabase } from "@/lib/db";
import { uploadToImgBB } from "@/lib/services/imgbb";
import { isFile } from "@/lib/utils/file";
import CategoryModel from "@/models/CategoryModel";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";
import slugify from "slugify";

export type CreateCategoryPayload = {
  name: string;
  image: File;
};

export const createCategory = async ({
  name,
  image,
}: CreateCategoryPayload) => {
  // Basic validation
  if (!name || typeof name !== "string") {
    return {
      success: false,
      message: "Name is required and must be a string",
    };
  }

  if (!image || !isFile(image)) {
    return {
      success: false,
      message: "Image is required and must be a valid file",
    };
  }

  try {
    await connectToDatabase();

    // Generate unique slug
    const baseSlug = slugify(name, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    while (await CategoryModel.exists({ slug })) {
      slug = `${baseSlug}-${counter++}`;
    }

    // Upload image to ImgBB
    const imageUrl = await uploadToImgBB(image, slug);

    await CategoryModel.create({
      name,
      image: imageUrl,
      slug,
    });

    // Invalidate cache
    updateTag("categories");
  } catch (err) {
    console.error(err);
    return { success: false, message: "Failed to create category" };
  }

  // Redirect after success
  redirect(`/admin/categories`);
};
