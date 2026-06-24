import { HomePayload } from '../types/schema';
import homePayload from '../mock/homePayload.json';

export const mysteryGiftCarnivalCampaign: HomePayload = {
  ...homePayload,
  active_campaign: 'MYSTERY_GIFT_CARNIVAL',
  theme: { primary: '#D32F2F', secondary: '#FF8F00', background: '#FFF3E0', text: '#1A1A1A' }
} as HomePayload;
