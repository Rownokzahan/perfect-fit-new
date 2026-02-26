"use cache";

import { connectToDatabase } from "@/lib/db";
import { toPlainObject } from "@/lib/utils/object";
import ProductModel from "@/models/ProductModel";
import { Product } from "@/types/product";
import { cacheTag } from "next/cache";

export const getLatestProducts = async (): Promise<Product[]> => {
  cacheTag("products");

  try {
    await connectToDatabase();
    const data = await ProductModel.find({ status: "active" })
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
