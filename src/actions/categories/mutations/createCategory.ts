"use server";

import { connectToDatabase } from "@/lib/db";
import { uploadToImgBB } from "@/lib/services/imgbb";
import { requireAdmin } from "@/lib/utils/admin";
import { generateUniqueSlug } from "@/lib/utils/slug";
import { validateFile, validateNonEmptyString } from "@/lib/utils/validators";
import CategoryModel from "@/models/CategoryModel";
import { updateTag } from "next/cache";
import { redirect } from "next/navigation";

export type CreateCategoryPayload = {
  name: string;
  image: File;
};

export const createCategory = requireAdmin(
  async ({ name, image }: CreateCategoryPayload) => {
    const validators = [
      validateNonEmptyString(name, "Category Name"),
      validateFile(image, "Category image"),
    ];

    for (const v of validators) {
      if (!v.valid) return { success: false, message: v.message };
    }

    try {
      await connectToDatabase();

      const slug = await generateUniqueSlug({ Model: CategoryModel, name });

      // Upload image to ImgBB
      const imageUrl = await uploadToImgBB(image, slug);

      await CategoryModel.create({
        name,
        slug,
        image: imageUrl,
      });

      // Invalidate cache
      updateTag("categories");
    } catch (err) {
      console.error(err);
      return { success: false, message: "Failed to create category" };
    }

    // Redirect after success
    redirect(`/admin/categories`);
  },
);
