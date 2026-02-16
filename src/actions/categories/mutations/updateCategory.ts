"use server";

import { connectToDatabase } from "@/lib/db";
import CategoryModel from "@/models/CategoryModel";
import { Id } from "@/types";
import { updateTag } from "next/cache";
import { uploadToImgBB } from "@/lib/services/imgbb";
import { redirect } from "next/navigation";
import {
  validateId,
  validateImageOrUrl,
  validateNonEmptyString,
} from "@/lib/utils/validators";
import { generateUniqueSlug } from "@/lib/utils/slug";

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
  const validators = [
    validateId(categoryId, "Category Id"),
    validateNonEmptyString(name, "Category name"),
    validateImageOrUrl(image, "Category image"),
  ];

  for (const v of validators) {
    if (!v.valid) return { success: false, message: v.message };
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
      slug = await generateUniqueSlug({
        Model: CategoryModel,
        name,
        excludeId: categoryId,
      });
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
