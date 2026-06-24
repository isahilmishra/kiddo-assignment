import { ActionSchema } from '../types/schema';
import { useCartStore } from '../store/cartStore';

export const handleAction = (action?: ActionSchema, node?: any) => {
  if (!action) return;

  console.log('Action Dispatched:', action);

  switch (action.type) {
    case 'ADD_TO_CART':
      if (node) {
        useCartStore.getState().increment(node);
      }
      break;
    case 'DEEP_LINK':
      console.log('Navigating to:', action.payload.url);
      break;
    case 'APPLY_MYSTERY_GIFT_COUPON':
      console.log('Coupon applied!');
      break;
    default:
      console.warn('Unhandled action type:', action.type);
  }
};
