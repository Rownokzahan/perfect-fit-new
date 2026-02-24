import { connectToDatabase } from "@/lib/db";
import { toPlainObject } from "@/lib/utils/object";
import { getUserOrGuestInfo } from "@/lib/utils/userOrGuestInfo";
import WishlistModel from "@/models/WishlistModel";
import { Id } from "@/types";
import { cacheLife, cacheTag } from "next/cache";

const getCachedWishlistedIds = async (ownerId: Id): Promise<Id[]> => {
  "use cache";
  cacheTag(`wishlist-${ownerId}`);
  cacheLife("minutes");

  try {
    await connectToDatabase();

    const ids = await WishlistModel.distinct("items.productId", { ownerId });

    return toPlainObject(ids);
  } catch (err) {
    console.error("Failed to fetch wishlisted product Ids:", err);
    return [];
  }
};

export const getWishlistedProductIds = async () => {
  const ownerInfo = await getUserOrGuestInfo();

  if (!ownerInfo) {
    return [];
  }

  return getCachedWishlistedIds(ownerInfo.ownerId);
};
