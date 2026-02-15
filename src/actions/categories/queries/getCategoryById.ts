import { connectToDatabase } from "@/lib/db";
import CategoryModel from "@/models/CategoryModel";
import { Id } from "@/types";
import { Category } from "@/types/category";
import { toPlainObject } from "@/lib/utils/object";
import { cacheTag } from "next/cache";

export const getCategoryById = async (
  categoryId: Id,
): Promise<Category | null> => {
  "use cache";
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
