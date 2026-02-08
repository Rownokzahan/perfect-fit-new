"use cache";

import { connectToDatabase } from "@/lib/db";
import { toPlainObject } from "@/lib/utils/object";
import ProductModel from "@/models/ProductModel";
import { cacheTag } from "next/cache";

export const getLatestProducts = async () => {
  cacheTag("latest-products");

  try {
    await connectToDatabase();
    const data = await ProductModel.find()
      .sort({ createdAt: -1 })
      .limit(8)
      .lean();

    return toPlainObject(data);
  } catch (err) {
    console.error("Failed to fetch latest products", err);
    return [];
  }
};

export default getLatestProducts;
