export type ActionPayload =
  | { type: 'ADD_TO_CART'; payload: { id: string } }
  | { type: 'DEEP_LINK'; payload: { url: string } }
  | { type: 'APPLY_MYSTERY_GIFT_COUPON'; payload: { code: string } }
  | { type: string; payload: Record<string, unknown> };
