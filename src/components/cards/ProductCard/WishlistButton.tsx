"use client";

import { BiSolidRightArrow } from "react-icons/bi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import clsx from "clsx";
import { Id } from "@/types";
import useWishlist from "@/hooks/useWishlist";

interface WishlistButtonProps {
  productId: Id;
}

const WishlistButton = ({ productId }: WishlistButtonProps) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isInWishlist = wishlist.some((item) => item === productId);
  const Icon = isInWishlist ? FaHeart : FaRegHeart;

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return (
    <div className="absolute top-4 right-4 sm:top-5 sm:right-5 group">
      <button
        aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
        className="size-7 rounded-full shadow bg-light-light grid place-items-center"
        onClick={handleWishlistToggle}
      >
        <Icon className="mt-0.5 text-primary active:text-sm" />
      </button>

      <div
        className={clsx(
          "absolute right-10 top-1/2 -translate-y-1/2 whitespace-nowrap",
          "scale-0 opacity-0",
          "group-hover:scale-100 group-hover:opacity-100",
          "transition-opacity duration-300"
        )}
      >
        <div className="relative">
          <div className="px-2 py-1 rounded shadow bg-light-light/80 text-sm text-dark-light font-semibold">
            {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </div>

          <BiSolidRightArrow className="absolute -right-3 top-1/2 -translate-y-1/2 text-light-light/80" />
        </div>
      </div>
    </div>
  );
};

export default WishlistButton;
