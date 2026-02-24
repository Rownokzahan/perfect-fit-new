"use server";

import { auth } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { getGuestId } from "@/lib/utils/guestId";
import WishlistModel from "@/models/WishlistModel";
import { Types } from "mongoose";
import { updateTag } from "next/cache";
import { headers } from "next/headers";

export const mergeGuestWishlist = async () => {
  // Get logged-in user
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session?.user?.id) {
    return { error: true, message: "User not logged in" };
  }
  const userId = session.user.id;

  // Get guest ID from cookie
  const guestId = await getGuestId();
  if (!guestId) {
    updateTag(`wishlist-${userId}`);
    return { error: true, message: "No guest ID, nothing to merge" };
  }

  try {
    await connectToDatabase();

    // Fetch guest wishlist
    const guestWishlist = await WishlistModel.findOne({
      ownerId: guestId,
    });

    if (!guestWishlist || guestWishlist.items.length === 0) {
      // Delete empty guest wishlist if it exists
      if (guestWishlist) {
        await WishlistModel.findOneAndDelete({ ownerId: guestId });
      }

      updateTag(`wishlist-${userId}`);
      return {
        error: true,
        message: "Guest wishlist empty, nothing to merge",
      };
    }

    // Fetch user wishlist
    const userWishlist = await WishlistModel.findOne({ ownerId: userId });

    if (userWishlist) {
      // Merge guest items into existing user wishlist using a Set for fast lookup
      const userProductIds = new Set(
        userWishlist.items.map((i: { productId: Types.ObjectId }) =>
          i.productId.toString(),
        ),
      );

      const mergedItems = [
        ...userWishlist.items,
        ...guestWishlist.items.filter(
          (item: { productId: Types.ObjectId }) =>
            !userProductIds.has(item.productId.toString()),
        ),
      ];

      await WishlistModel.findOneAndUpdate(
        { ownerId: userId },
        { $set: { items: mergedItems } },
      );

      // Delete the guest wishlist after merging
      await WishlistModel.findByIdAndDelete(guestWishlist._id);

      updateTag(`wishlist-${guestId}`);
    } else {
      // No user wishlist → create new one using guest items
      await WishlistModel.create({
        ownerId: userId,
        userType: "user",
        items: guestWishlist.items,
      });
    }

    updateTag(`wishlist-${userId}`);
  } catch (error) {
    console.error("Merge guest wishlist failed:", error);
    return { error: true, message: "Failed to merge guest wishlist" };
  }
};
