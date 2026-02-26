import { connectToDatabase } from "@/lib/db";
import { isCurrentUserAdmin } from "@/lib/utils/admin";
import { toPlainObject } from "@/lib/utils/object";
import ProductModel from "@/models/ProductModel";
import { Id } from "@/types";
import { Product } from "@/types/product";
import { cacheTag } from "next/cache";

const getCachedProduct = async (
  productId: Id,
  isAdmin: boolean,
): Promise<Product | null> => {
  "use cache";
  cacheTag(`product-${productId}`);

  try {
    await connectToDatabase();

    const product = await ProductModel.findOne({
      _id: productId,
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

export const getProductById = async (
  productId: Id,
): Promise<Product | null> => {
  const isAdmin = await isCurrentUserAdmin();

  return getCachedProduct(productId, isAdmin);
};
