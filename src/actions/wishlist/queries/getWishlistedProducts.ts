import { connectToDatabase } from "@/lib/db";
import { getGuestOrUserId } from "@/lib/utils/getGuestOrUserId";
import { toPlainObject } from "@/lib/utils/object";
import WishlistModel from "@/models/WishlistModel";
import { Id } from "@/types";
import { Product } from "@/types/product";
import { cacheLife, cacheTag } from "next/cache";

const getCachedWishlistedProducts = async (ownerId: Id): Promise<Product[]> => {
  "use cache";
  cacheTag(`wishlist-${ownerId}`);
  cacheLife("minutes");

  try {
    await connectToDatabase();

    const products = await WishlistModel.aggregate([
      { $match: { ownerId } },
      { $unwind: "$items" },
      { $sort: { "items.addedAt": -1 } },
      {
        $lookup: {
          from: "products",
          localField: "items.productId",
          foreignField: "_id",
          as: "items.product",
        },
      },
      { $unwind: "$items.product" },
      { $replaceRoot: { newRoot: "$items.product" } },
    ]);

    return toPlainObject(products);
  } catch (err) {
    console.error("Failed to fetch wishlisted products", err);
    return [];
  }
};

export const getWishlistedProducts = async () => {
  const id = await getGuestOrUserId();

  if (!id) {
    return [];
  }

  return getCachedWishlistedProducts(id);
};
