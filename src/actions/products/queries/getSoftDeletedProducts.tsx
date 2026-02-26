import { connectToDatabase } from "@/lib/db";
import { toPlainObject } from "@/lib/utils/object";
import ProductModel from "@/models/ProductModel";
import { Product } from "@/types/product";

export const getSoftDeletedProducts = async (): Promise<Product[]> => {
  try {
    await connectToDatabase();

    const products = await ProductModel.find({ status: "archived" })
      .sort({ deletedAt: -1 })
      .lean();

    return toPlainObject(products);
  } catch (err) {
    console.error("Failed to fetch soft-deleted products:", err);
    return [];
  }
};
