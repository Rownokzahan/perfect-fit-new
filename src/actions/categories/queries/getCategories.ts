"use cache";

import { connectToDatabase } from "@/lib/db";
import CategoryModel from "@/models/CategoryModel";
import { cacheTag } from "next/cache";
import { Category } from "@/types/category";
import { toPlainObject } from "@/lib/utils/object";

const getCategories = async (): Promise<Category[]> => {
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

export default getCategories;
