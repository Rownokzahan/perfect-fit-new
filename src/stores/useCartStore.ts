import { Id } from "@/types";
import { persist } from "zustand/middleware";
import { CustomizedProduct } from "@/types/product";
import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface State {
  items: CustomizedProduct[];
  isHydrated: boolean;
}

interface Actions {
  addToCart: (product: Omit<CustomizedProduct, "_id">) => void;
  removeCartItem: (id: Id) => void;
  increaseCartItemQuantity: (id: Id) => void;
  decreaseCartItemQuantity: (id: Id) => void;
  clearCart: () => void;
}

export const useCartStore = create<State & { actions: Actions }>()(
  persist(
    (set) => ({
      items: [],
      isHydrated: false,

      actions: {
        addToCart: (product) =>
          set((state) => ({
            items: [{ _id: uuidv4(), ...product }, ...state.items],
          })),

        removeCartItem: (id) =>
          set((state) => ({
            items: state.items.filter((item) => item._id !== id),
          })),

        increaseCartItemQuantity: (id) =>
          set((state) => ({
            items: state.items.map((item) => {
              if (item._id !== id) {
                return item;
              }

              const price = item.customDress
                ? item.customDress?.price || 0
                : item.product?.price || 0;

              const quantity = item.quantity + 1;
              return { ...item, quantity, totalPrice: price * quantity };
            }),
          })),

        decreaseCartItemQuantity: (id) =>
          set((state) => ({
            items: state.items.map((item) => {
              if (item._id !== id || item.quantity === 1) {
                return item;
              }

              const price = item.customDress
                ? item.customDress?.price || 0
                : item.product?.price || 0;

              const quantity = item.quantity - 1;

              return { ...item, quantity, totalPrice: price * quantity };
            }),
          })),

        clearCart: () => set(() => ({ items: [] })),
      },
    }),

    {
      name: "cart",
      partialize: (state) => ({ items: state.items }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isHydrated = true;
        }
      },
    },
  ),
);
