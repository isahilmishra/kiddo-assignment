import { HomePayload } from '../types/schema';
import homePayload from '../mock/homePayload.json';

export const backToSchoolCampaign: HomePayload = {
  ...homePayload,
  active_campaign: 'BACK_TO_SCHOOL',
  theme: { primary: '#FFD700', secondary: '#1565C0', background: '#FFFDE7', text: '#1A1A1A' }
} as HomePayload;
