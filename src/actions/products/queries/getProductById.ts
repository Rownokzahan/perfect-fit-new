import { connectToDatabase } from "@/lib/db";
import { toPlainObject } from "@/lib/utils/object";
import ProductModel from "@/models/ProductModel";
import { Id } from "@/types";
import { Product } from "@/types/product";
import { cacheTag } from "next/cache";

export const getProductById = async (
  productId: Id,
): Promise<Product | null> => {
  "use cache";
  cacheTag(`product-${productId}`);

  try {
    await connectToDatabase();
    const product = await ProductModel.findById(productId).lean();

    if (!product) {
      return null;
    }

    return toPlainObject(product);
  } catch (err) {
    console.error(err);
    return null;
  }
};
