import { HomePayload, UIBlock, BannerHeroBlock, DynamicCollectionBlock } from '../types/schema';
import homePayload from '../mock/homePayload.json';

const campaignBanner: BannerHeroBlock = {
  id: 'banner_school',
  type: 'BANNER_HERO',
  image_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200',
  title: 'Back to School Sale',
  subtitle: 'Up to 50% off Essentials',
  action: { type: 'DEEP_LINK', payload: { url: '/campaign/back-to-school' } }
};

const campaignCollection: DynamicCollectionBlock = {
  id: 'collection_school',
  type: 'DYNAMIC_COLLECTION',
  theme_label: 'Classroom Must-Haves',
  items: [
    { id: 'cs1', name: 'Notebook Set', price: 149, image_url: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'cs1' } } },
    { id: 'cs2', name: 'Geometry Box', price: 199, image_url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'cs2' } } },
    { id: 'cs3', name: 'Markers 12pc', price: 99, image_url: 'https://images.unsplash.com/photo-1560421683-6856fea585c7?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'cs3' } } }
  ]
};

const mergedBlocks: UIBlock[] = (homePayload.blocks as UIBlock[]).map(block => {
  if (block.type === 'BANNER_HERO') return campaignBanner;
  if (block.type === 'DYNAMIC_COLLECTION') return campaignCollection;
  return block;
});

export const backToSchoolCampaign: HomePayload = {
  ...homePayload,
  active_campaign: 'BACK_TO_SCHOOL',
  theme: { primary: '#FFD700', secondary: '#1565C0', background: '#FFFDE7', text: '#1A1A1A' },
  blocks: mergedBlocks
} as HomePayload;
