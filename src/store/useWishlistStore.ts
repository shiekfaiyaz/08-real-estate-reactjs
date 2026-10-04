import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
  wishlist: number[];
  toggleWishlist: (id: number) => void;
  isLiked: (id: number) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [1], // Default sample saved item ID
      toggleWishlist: (id: number) => {
        const current = get().wishlist;
        if (current.includes(id)) {
          set({ wishlist: current.filter((item) => item !== id) });
        } else {
          set({ wishlist: [...current, id] });
        }
      },
      isLiked: (id: number) => get().wishlist.includes(id),
    }),
    {
      name: "nestora-wishlist",
    }
  )
);