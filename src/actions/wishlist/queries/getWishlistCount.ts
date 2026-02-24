import { connectToDatabase } from "@/lib/db";
import { getUserOrGuestInfo } from "@/lib/utils/userOrGuestInfo";
import WishlistModel from "@/models/WishlistModel";
import { Id } from "@/types";
import { cacheLife, cacheTag } from "next/cache";

const getCachedWishlistCount = async (ownerId: Id): Promise<number> => {
  "use cache";
  cacheTag(`wishlist-${ownerId}`);
  cacheLife("minutes");

  try {
    await connectToDatabase();

    const wishlist = await WishlistModel.findOne({ ownerId })
      .select("items")
      .lean();

    return wishlist.items?.length;
  } catch (err) {
    console.error("Failed to fetch wishlisted products count:", err);
    return 0;
  }
};

export const getWishlistCount = async () => {
  const ownerInfo = await getUserOrGuestInfo();

  if (!ownerInfo) {
    return 0;
  }

  return getCachedWishlistCount(ownerInfo.ownerId);
};
