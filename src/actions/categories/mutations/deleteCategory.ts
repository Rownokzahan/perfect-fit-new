"use server";

import { connectToDatabase } from "@/lib/db";
import CategoryModel from "@/models/CategoryModel";
import { Id } from "@/types";
import { updateTag } from "next/cache";

export const deleteCategory = async (categoryId: Id) => {
  try {
    await connectToDatabase();
    const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return { success: false, message: "Category not found" };
    }

    updateTag("categories");
  } catch (err) {
    console.error("Failed to delete category", err);
    return { success: false, message: "Could not delete category" };
  }
};
