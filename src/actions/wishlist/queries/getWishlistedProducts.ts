import { connectToDatabase } from "@/lib/db";
import { toPlainObject } from "@/lib/utils/object";
import { getUserOrGuestInfo } from "@/lib/utils/userOrGuestInfo";
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
  const ownerInfo = await getUserOrGuestInfo();

  if (!ownerInfo) {
    return [];
  }

  return getCachedWishlistedProducts(ownerInfo.ownerId);
};
