import { Id } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  items: Id[];
  isHydrated: boolean;
}

interface Actions {
  addToWishlist: (id: Id) => void;
  removeFromWishlist: (id: Id) => void;
}

export const useWishlistStore = create<State & { actions: Actions }>()(
  persist(
    (set) => ({
      items: [],
      isHydrated: false,

      actions: {
        addToWishlist: (id) =>
          set((state) => ({ items: [...state.items, id] })),

        removeFromWishlist: (id) =>
          set((state) => ({
            items: state.items.filter((item) => item !== id),
          })),
      },
    }),
    {
      name: "wishlist",
      partialize: (state) => ({ items: state.items }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isHydrated = true;
        }
      },
    }
  )
);
