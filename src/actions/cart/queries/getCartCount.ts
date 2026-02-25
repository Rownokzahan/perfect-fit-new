import { connectToDatabase } from "@/lib/db";
import { getUserOrGuestInfo } from "@/lib/utils/userOrGuestInfo";
import WishlistModel from "@/models/WishlistModel";
import { Id } from "@/types";
import { cacheLife, cacheTag } from "next/cache";

const getCachedCartCount = async (ownerId: Id): Promise<number> => {
  "use cache";
  cacheTag(`cart-${ownerId}`);
  cacheLife("minutes");

  try {
    await connectToDatabase();

    const cart = await WishlistModel.findOne({ ownerId })
      .select("items")
      .lean();

    return cart.items?.length;
  } catch (err) {
    console.error("Failed to fetch cart items count:", err);
    return 0;
  }
};

export const getCartCount = async () => {
  const ownerInfo = await getUserOrGuestInfo();

  if (!ownerInfo) {
    return 0;
  }

  return getCachedCartCount(ownerInfo.ownerId);
};
