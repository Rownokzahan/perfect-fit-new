import { useCartStore } from "@/stores/useCartStore";
import { useMemo } from "react";

const useCart = () => {
  const { items, isHydrated, actions } = useCartStore((state) => state);

  // Calculate total price
  const cartTotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.totalPrice, 0);
  }, [items]);

  return {
    cart: items,
    cartTotal,
    isHydrated,

    ...actions,
  };
};

export default useCart;
