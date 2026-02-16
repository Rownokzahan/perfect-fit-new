import { connectToDatabase } from "@/lib/db";
import { toPlainObject } from "@/lib/utils/object";
import ProductModel from "@/models/ProductModel";
import { Product } from "@/types/product";
import { cacheTag } from "next/cache";

export const getProducts = async (): Promise<Product[]> => {
  "use cache";
  cacheTag("products");

  try {
    await connectToDatabase();

    const data = await ProductModel.find().lean();
    return toPlainObject(data);
  } catch (err) {
    console.error("Failed to fetch products", err);
    return [];
  }
};
