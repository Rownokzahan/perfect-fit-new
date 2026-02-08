"use server";

import { connectToDatabase } from "@/lib/db";
import CategoryModel from "@/models/CategoryModel";
import { Id } from "@/types";
import { updateTag } from "next/cache";

type DeleteCategoryResult = {
  success: boolean;
  message: string;
};

const deleteCategory = async (
  categoryId: Id,
): Promise<DeleteCategoryResult> => {
  try {
    await connectToDatabase();
    const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return { success: false, message: "Category not found" };
    }

    updateTag("categories");
    return { success: true, message: "Category deleted" };
  } catch (err) {
    console.error("Failed to delete category", err);
    return { success: false, message: "Could not delete category" };
  }
};

export default deleteCategory;
