"use server";

import { connectToDatabase } from "@/lib/db";
import CategoryModel from "@/models/CategoryModel";
import { Id } from "@/types";
import slugify from "slugify";
import { updateTag } from "next/cache";
import { uploadToImgBB } from "@/lib/services/imgbb";
import { redirect } from "next/navigation";

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
  try {
    await connectToDatabase();

    // Fetch the existing category
    const existingCategory = await CategoryModel.findById(categoryId);
    if (!existingCategory) {
      return { success: false, message: "Category not found" };
    }

    // Validate name
    if (!name || typeof name !== "string") {
      return {
        success: false,
        message: "Name is required and must be a string.",
      };
    }

    // Validate image
    const isFile =
      typeof image === "object" &&
      typeof (image as File).arrayBuffer === "function";
    if (!image || (typeof image !== "string" && !isFile)) {
      return {
        success: false,
        message: "Image is required and must be a string or valid file",
      };
    }

    // Generate slug only if name changed
    let slug = existingCategory.slug;
    if (name !== existingCategory.name) {
      const baseSlug = slugify(name, { lower: true, strict: true });
      slug = baseSlug;
      let counter = 1;
      while (await CategoryModel.exists({ slug, _id: { $ne: categoryId } })) {
        slug = `${baseSlug}-${counter++}`;
      }
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

  redirect(`/admin/categories`);
};

export default updateCategory;
