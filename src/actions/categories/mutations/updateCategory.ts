"use server";

import { connectToDatabase } from "@/lib/db";
import CategoryModel from "@/models/CategoryModel";
import { Id } from "@/types";
import slugify from "slugify";
import { updateTag } from "next/cache";
import { uploadToImgBB } from "@/lib/services/imgbb";
import { redirect } from "next/navigation";
import { isFile } from "@/lib/utils/file";
import mongoose from "mongoose";

export type UpdateCategoryPayload = {
  categoryId: Id;
  name: string;
  image: string | File;
};

export const updateCategory = async ({
  categoryId,
  name,
  image,
}: UpdateCategoryPayload) => {
  // Basic validation

  if (
    !categoryId ||
    typeof categoryId !== "string" ||
    !mongoose.Types.ObjectId.isValid(categoryId)
  ) {
    return {
      success: false,
      message: "Invalid category ID",
    };
  }

  if (!name || typeof name !== "string") {
    return {
      success: false,
      message: "Name is required and must be a string.",
    };
  }

  if (!image || (typeof image !== "string" && !isFile(image))) {
    return {
      success: false,
      message: "Image is required and must be a string or valid file",
    };
  }

  try {
    await connectToDatabase();

    // Fetch the existing category
    const existingCategory = await CategoryModel.findById(categoryId);
    if (!existingCategory) {
      return { success: false, message: "Category not found" };
    }

    // Generate slug only if name changed
    let slug = existingCategory.slug;

    if (name !== existingCategory.name) {
      const baseSlug = slugify(name, { lower: true, strict: true });
      let newSlug = baseSlug;
      let counter = 1;

      while (
        await CategoryModel.exists({ slug: newSlug, _id: { $ne: categoryId } })
      ) {
        newSlug = `${baseSlug}-${counter++}`;
      }

      slug = newSlug;
    }

    // Handle image upload
    const imageUrl =
      typeof image === "object" ? await uploadToImgBB(image, slug) : image;

    // Update category
    await CategoryModel.findByIdAndUpdate(
      categoryId,
      { name, slug, image: imageUrl },
      { new: true, runValidators: true },
    );

    updateTag(`category-${categoryId}`);
    updateTag("categories");
  } catch (err) {
    console.error(err);
    return { success: false, message: "Failed to update category" };
  }

  // Redirect after success
  redirect(`/admin/categories`);
};

export default updateCategory;
