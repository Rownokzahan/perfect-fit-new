"use cache";

import { connectToDatabase } from "@/lib/db";
import CategoryModel from "@/models/CategoryModel";
import { cacheTag } from "next/cache";
import { Id } from "@/types";
import { Category } from "@/types/category";
import { toPlainObject } from "@/lib/utils/object";

const getCategoryById = async (categoryId: Id): Promise<Category | null> => {
  cacheTag(`category-${categoryId}`);

  try {
    await connectToDatabase();
    const category = await CategoryModel.findById(categoryId).lean();

    if (!category) {
      return null;
    }

    return toPlainObject(category);
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default getCategoryById;
