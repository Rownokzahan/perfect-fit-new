import { connectToDatabase } from "@/lib/db";
import CategoryModel from "@/models/CategoryModel";
import { Category } from "@/types/category";
import { toPlainObject } from "@/lib/utils/object";
import { cacheTag } from "next/cache";

export const getCategories = async (): Promise<Category[]> => {
  "use cache";
  cacheTag("categories");

  try {
    await connectToDatabase();
    const data = await CategoryModel.find().lean();
    return toPlainObject(data);
  } catch (err) {
    console.error("Failed to fetch categories", err);
    return [];
  }
};
