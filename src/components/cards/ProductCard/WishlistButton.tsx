"use client";

import { BiSolidRightArrow } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import clsx from "clsx";
import { Id } from "@/types";
import { addToWishlist } from "@/actions/wishlist/mutations/addToWishlist";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { removeFromWishlist } from "@/actions/wishlist/mutations/removeFromWishlist";

interface WishlistButtonProps {
  productId: Id;
  isWishlisted: boolean;
}

const WishlistButton = ({ productId, isWishlisted }: WishlistButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const Icon = isWishlisted ? FaHeart : FaRegHeart;

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      startTransition(async () => {
        const result = await removeFromWishlist(productId);
        if (result?.error) {
          toast.error(result.message, { duration: 5000 });
        }
      });
    } else {
      startTransition(async () => {
        const result = await addToWishlist(productId);
        if (result?.error) {
          toast.error(result.message, { duration: 5000 });
        }
      });
    }
  };

  return (
    <div className="absolute top-4 right-4 sm:top-5 sm:right-5 group">
      <button
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        disabled={isPending}
        className={clsx(
          "size-7 rounded-full shadow bg-light-light grid place-items-center",
          isPending && "opacity-50 cursor-not-allowed animate-pulse",
        )}
        onClick={handleWishlistToggle}
      >
        <Icon className="mt-0.5 text-primary active:text-sm" />
      </button>

      <div
        className={clsx(
          "absolute right-10 top-1/2 -translate-y-1/2 whitespace-nowrap",
          "scale-0 opacity-0",
          "group-hover:scale-100 group-hover:opacity-100",
          "transition-opacity duration-300",
        )}
      >
        <div className="relative">
          <div className="px-2 py-1 rounded shadow bg-light-light/80 text-sm text-dark-light font-semibold">
            {isPending
              ? "Updating..."
              : isWishlisted
                ? "Remove from Wishlist"
                : "Add to Wishlist"}
          </div>

          <BiSolidRightArrow className="absolute -right-3 top-1/2 -translate-y-1/2 text-light-light/80" />
        </div>
      </div>
    </div>
  );
};

export default WishlistButton;
