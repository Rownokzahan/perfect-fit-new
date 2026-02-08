import { useWishlistStore } from "@/stores/useWishlistStore";

const useWishlist = () => {
  const { items, isHydrated, actions } = useWishlistStore((state) => state);

  return {
    wishlist: items,
    isHydrated,
    ...actions,
  };
};

export default useWishlist;
