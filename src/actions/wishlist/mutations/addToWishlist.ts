"use server";

import { Types } from "mongoose";
import { connectToDatabase } from "@/lib/db";
import { validateId } from "@/lib/utils/validators";
import WishlistModel from "@/models/WishlistModel";
import { getGuestOrUserId } from "@/lib/utils/getGuestOrUserId";
import { updateTag } from "next/cache";

export const addToWishlist = async (productId: string) => {
  const validation = validateId(productId, "Product ID");
  if (!validation.valid) {
    return { error: true, message: validation.message };
  }

  const ownerId = await getGuestOrUserId();

  if (!ownerId) {
    return {
      error: true,
      message: "Session expired. Please refresh and try again.",
    };
  }

  try {
    await connectToDatabase();

    const productObjectId = new Types.ObjectId(productId);

    await WishlistModel.findOneAndUpdate(
      {
        ownerId,
        "items.productId": { $ne: productObjectId },
      },
      {
        $setOnInsert: { ownerId },
        $push: {
          items: {
            productId: productObjectId,
            addedAt: new Date(),
          },
        },
      },
      {
        upsert: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      },
    );

    updateTag(`wishlist-${ownerId}`);
  } catch (error) {
    console.error("Add to wishlist failed:", error);
    return { error: true, message: "Failed to add on wishlist" };
  }
};
