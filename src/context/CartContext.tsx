import React, { createContext, useReducer, useContext, Dispatch, ReactNode } from 'react';

export interface CartState {
  items: Record<string, number>;
}

export type CartAction = 
  | { type: 'ADD'; id: string }
  | { type: 'REMOVE'; id: string };

const initialState: CartState = { items: {} };

const CartStateContext = createContext<CartState>(initialState);
const CartDispatchContext = createContext<Dispatch<CartAction>>(() => null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        items: { ...state.items, [action.id]: (state.items[action.id] || 0) + 1 }
      };
    case 'REMOVE': {
      const newCount = (state.items[action.id] || 0) - 1;
      const newItems = { ...state.items };
      if (newCount <= 0) {
        delete newItems[action.id];
      } else {
        newItems[action.id] = newCount;
      }
      return { ...state, items: newItems };
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
