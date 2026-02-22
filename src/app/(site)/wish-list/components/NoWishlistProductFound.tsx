import Button from "@/components/ui/Button";
import { TbHeartSearch } from "react-icons/tb";

const NoWishlistProductFound = () => {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="ui-container text-center">
        <TbHeartSearch className="mx-auto text-6xl" />

        <h3 className="mt-4 font-semibold text-xl">Your wishlist is empty</h3>

        <p className="mt-3 text-dark-light">
          Looks like you haven&apos;t added any dresses to your wishlist yet.
        </p>

        <Button href="/dresses" className="w-max mx-auto mt-6">
          Go Shopping
        </Button>
      </div>
    </div>
  );
};

export default NoWishlistProductFound;
