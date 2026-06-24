import { ActionSchema } from '../types/schema';
import { useCartStore } from '../store/cartStore';
import { useUIStore } from '../store/uiStore';
import { Alert, Platform } from 'react-native';

const showAlert = (title: string, message: string) => {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n${message}`);
  } else {
    Alert.alert(title, message);
  }
};

export const handleAction = (action?: ActionSchema, node?: any) => {
  if (!action) return;

  switch (action.type) {
    case 'ADD_TO_CART':
      if (node) {
        useCartStore.getState().increment(node);
      }
      break;
    case 'DEEP_LINK':
      showAlert('Deep Link Triggered', `Navigating to: ${action.payload.url}`);
      break;
    case 'APPLY_MYSTERY_GIFT_COUPON':
      useUIStore.getState().triggerOverlay();
      showAlert('Mystery Coupon!', 'Your mystery gift coupon has been successfully applied to your cart!');
      break;
    default:
      console.warn('Unhandled action type:', action.type);
  }
};
