import { HomePayload } from '../types/schema';
import homePayload from '../mock/homePayload.json';

export const summerPlayhouseCampaign: HomePayload = {
  ...homePayload,
  active_campaign: 'SUMMER_PLAYHOUSE',
  theme: { primary: '#0288D1', secondary: '#80DEEA', background: '#E1F5FE', text: '#1A1A1A' }
} as HomePayload;
