import { create } from 'zustand';
import { ProductNode } from '../types/schema';

export interface CartItem {
  quantity: number;
  product: ProductNode;
}

interface CartState {
  items: Record<string, CartItem>;
  increment: (product: ProductNode) => void;
  decrement: (id: string) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: {},
  increment: (product) => set((state) => {
    const existing = state.items[product.id];
    return {
      items: { 
        ...state.items, 
        [product.id]: { 
          product, 
          quantity: (existing ? existing.quantity : 0) + 1 
        } 
      }
    };
  }),
  decrement: (id) => set((state) => {
    const existing = state.items[id];
    if (!existing) return state;
    const newQuantity = existing.quantity - 1;
    
    if (newQuantity <= 0) {
      const { [id]: _, ...rest } = state.items;
      return { items: rest };
    }
    
    return {
      items: { 
        ...state.items, 
        [id]: { ...existing, quantity: newQuantity } 
      }
    };
  }),
}));
