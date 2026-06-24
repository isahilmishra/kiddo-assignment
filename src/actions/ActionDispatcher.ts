import { ActionPayload } from '../types/actions';
import { Alert, Platform } from 'react-native';

const showAlert = (title: string, message: string) => {
  if (Platform.OS === 'web') {
    window.alert(`${title}\n${message}`);
  } else {
    Alert.alert(title, message);
  }
};

export const handleAction = (action: ActionPayload, cartDispatch?: Function) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      if (cartDispatch) {
        cartDispatch({ type: 'ADD', id: action.payload.id });
      }
      break;
    case 'DEEP_LINK':
      showAlert('Deep Link Triggered', `Navigating to: ${action.payload.url}`);
      break;
    case 'APPLY_MYSTERY_GIFT_COUPON':
      showAlert('Mystery Coupon!', 'Your mystery gift coupon has been successfully applied to your cart!');
      break;
    default:
      console.warn('[ActionDispatcher] Unknown action type:', action.type);
  }
};
