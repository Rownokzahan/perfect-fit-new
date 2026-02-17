import { connectToDatabase } from "@/lib/db";
import { toPlainObject } from "@/lib/utils/object";
import ProductModel from "@/models/ProductModel";
import { Product } from "@/types/product";
import { cacheTag } from "next/cache";

export const getProductBySlug = async (
  productSlug: string,
): Promise<Product | null> => {
  "use cache";
  cacheTag(`product-${productSlug}`);

  try {
    await connectToDatabase();
    const product = await ProductModel.findOne({ slug: productSlug }).lean();

    if (!product) {
      return null;
    }

    return toPlainObject(product);
  } catch (err) {
    console.error(err);
    return null;
  }
};
