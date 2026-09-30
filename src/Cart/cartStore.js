



import {persist} from "zustand/middleware";
import {create} from "zustand";

const useCartStore = create(
    
    persist(
        
    (set) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return {
          items: state.items.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          ),
        };
      }

      return {
        items: [...state.items, { ...item, count: 1 }],
      };
    }),

  increase: (id) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      ),
    })),

  decrease: (id) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === id
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0),
    })),

  remove: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  clear: () => set({ items: [] }),

  
}), {name: "addis_eats_cart-storage"}


)

)


export default useCartStore;