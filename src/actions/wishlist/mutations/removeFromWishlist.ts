"use server";

import { updateTag } from "next/cache";
import { connectToDatabase } from "@/lib/db";
import WishlistModel from "@/models/WishlistModel";
import { Id } from "@/types";
import { validateId } from "@/lib/utils/validators";
import { getUserOrGuestInfo } from "@/lib/utils/userOrGuestInfo";

export const removeFromWishlist = async (productId: Id) => {
  const validation = validateId(productId, "Product ID");
  if (!validation.valid) {
    return { error: true, message: validation.message };
  }

  const ownerInfo = await getUserOrGuestInfo();

  if (!ownerInfo) {
    return {
      error: true,
      message: "Session expired. Please refresh and try again.",
    };
  }

  const { ownerId } = ownerInfo;

  try {
    await connectToDatabase();

    const result = await WishlistModel.updateOne(
      { ownerId },
      {
        $pull: {
          items: { productId: productId },
        },
      },
    );

    if (result.modifiedCount > 0) {
      updateTag(`wishlist-${ownerId}`);
    }
  } catch (error) {
    console.error("Failed to remove from wishlist:", error);
    return { error: true, message: "Could not remove item." };
  }
};
