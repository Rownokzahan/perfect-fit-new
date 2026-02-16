"use server";

import { connectToDatabase } from "@/lib/db";
import CategoryModel from "@/models/CategoryModel";
import { Id } from "@/types";
import mongoose from "mongoose";
import { updateTag } from "next/cache";

export const deleteCategory = async (categoryId: Id) => {
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
