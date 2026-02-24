"use server";

import { Types } from "mongoose";
import { connectToDatabase } from "@/lib/db";
import { validateId } from "@/lib/utils/validators";
import WishlistModel from "@/models/WishlistModel";
import { updateTag } from "next/cache";
import {
  createGuestInfo,
  getUserOrGuestInfo,
} from "@/lib/utils/userOrGuestInfo";

export const addToWishlist = async (productId: string) => {
  const validation = validateId(productId, "Product ID");
  if (!validation.valid) {
    return { error: true, message: validation.message };
  }

  let ownerInfo = await getUserOrGuestInfo();

  if (!ownerInfo) {
    ownerInfo = await createGuestInfo();
  }

  const { ownerId, userType } = ownerInfo;

  try {
    await connectToDatabase();

    const productObjectId = new Types.ObjectId(productId);

    await WishlistModel.findOneAndUpdate(
      {
        ownerId,
        "items.productId": { $ne: productObjectId },
      },
      {
        $setOnInsert: { ownerId, userType },
        $push: {
          items: {
            productId: productObjectId,
            addedAt: new Date(),
          },
        },
      },
      { upsert: true },
    );

    updateTag(`wishlist-${ownerId}`);
  } catch (error) {
    console.error("Add to wishlist failed:", error);
    return { error: true, message: "Failed to add on wishlist" };
  }
};
