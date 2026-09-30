

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (dish) =>
        set((state) => ({
          favorites: [...state.favorites, dish],
        })),
     
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (dish) => dish.id !== id
          ),
        })),
      
      toggleFavorite: (dish) => {
        const isAlreadyFavorite = get().favorites.some(
          (item) => item.id === dish.id
        );

        if (isAlreadyFavorite) {
          set((state) => ({
            favorites: state.favorites.filter(
              (item) => item.id !== dish.id
            ),
          }));
        } else {
          set((state) => ({
            favorites: [...state.favorites, dish],
          }));
        }
      },
   
      isFavorite: (id) =>
        get().favorites.some(
          (dish) => dish.id === id
        ),
    
      clearFavorites: () =>
        set({ favorites: [] }),
    }),
    {
      name: "favorites-storage",
    }
  )
);



export default useFavoritesStore;