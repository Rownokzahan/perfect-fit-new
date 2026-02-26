import { connectToDatabase } from "@/lib/db";
import { isCurrentUserAdmin } from "@/lib/utils/admin";
import { toPlainObject } from "@/lib/utils/object";
import ProductModel from "@/models/ProductModel";
import { Product } from "@/types/product";
import { cacheTag } from "next/cache";

export const getCachedProduct = async (
  productSlug: string,
  isAdmin: boolean,
): Promise<Product | null> => {
  "use cache";
  cacheTag(`product-${productSlug}`);

  try {
    await connectToDatabase();

    const product = await ProductModel.findOne({
      slug: productSlug,
      ...(isAdmin ? {} : { status: "active" }),
    }).lean();

    if (!product) {
      return null;
    }

    return toPlainObject(product);
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getProductBySlug = async (
  productSlug: string,
): Promise<Product | null> => {
  const isAdmin = await isCurrentUserAdmin();

  return getCachedProduct(productSlug, isAdmin);
};
