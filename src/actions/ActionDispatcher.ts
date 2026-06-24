import { CartAction } from '../context/CartContext';
import { Dispatch } from 'react';

export type ActionPayload =
  | { type: 'ADD_TO_CART'; payload: { id: string } }
  | { type: 'DEEP_LINK'; payload: { url: string } }
  | { type: 'APPLY_MYSTERY_GIFT_COUPON'; payload: { id: string; code: string } }
  | { type: string; payload: Record<string, unknown> };

export const handleAction = (
  action: ActionPayload,
  cartDispatch?: Dispatch<CartAction>
): void => {
  switch (action.type) {
    case 'ADD_TO_CART':
      cartDispatch?.({ type: 'ADD', id: (action.payload as { id: string }).id });
      break;
    case 'DEEP_LINK':
      console.log('[DeepLink]', (action.payload as { url: string }).url);
      break;
    case 'APPLY_MYSTERY_GIFT_COUPON':
      const couponPayload = action.payload as { id: string; code: string };
      console.log('[Coupon Applied]', couponPayload);
      cartDispatch?.({ type: 'ADD', id: couponPayload.id });
      break;
    default:
      console.warn('[ActionDispatcher] Unhandled action type:', action.type);
  }
};
