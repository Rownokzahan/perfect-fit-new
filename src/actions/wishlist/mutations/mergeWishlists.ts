"use server";

import WishlistModel from "@/models/WishlistModel";
import { Id } from "@/types";
import { updateTag } from "next/cache";

export const mergeWishlists = async (guestId: Id, userId: Id) => {
  const guestWishlist = await WishlistModel.findOne({
    ownerId: guestId,
    userType: "guest",
  });

  if (!guestWishlist || guestWishlist.items.length === 0) return;

  await WishlistModel.findOneAndUpdate(
    { ownerId: userId, userType: "user" },
    {
      $addToSet: {
        items: { $each: guestWishlist.items },
      },
    },
    { upsert: true }, // Create the user wishlist if it doesn't exist yet
  );

  await WishlistModel.deleteOne({ ownerId: guestId });

  /**
   * REVALIDATION LOGIC
   * We must update both tags because:
   * - The User's wishlist now has new items.
   * - The Guest's wishlist is now empty/deleted.
   */
  updateTag(`wishlist-${guestId}`);
  updateTag(`wishlist-${userId}`);
};
