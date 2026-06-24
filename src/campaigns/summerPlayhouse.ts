import { HomePayload, UIBlock, BannerHeroBlock, DynamicCollectionBlock } from '../types/schema';
import homePayload from '../mock/homePayload.json';

const campaignBanner: BannerHeroBlock = {
  id: 'banner_summer',
  type: 'BANNER_HERO',
  image_url: 'https://images.unsplash.com/photo-1534064567232-a63e9f4eb1bf?auto=format&fit=crop&q=80&w=1200',
  title: 'Summer Splash',
  subtitle: 'Dive into huge savings',
  action: { type: 'DEEP_LINK', payload: { url: '/campaign/summer-splash' } }
};

const campaignCollection: DynamicCollectionBlock = {
  id: 'collection_summer',
  type: 'DYNAMIC_COLLECTION',
  theme_label: 'Poolside Favorites',
  items: [
    { id: 'sm1', name: 'SPF 50 Sunscreen', price: 349, image_url: 'https://images.unsplash.com/photo-1526413425697-1d271fdbe7a9?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sm1' } } },
    { id: 'sm2', name: 'Inflatable Pool', price: 1299, image_url: 'https://images.unsplash.com/photo-1627993092523-289da0151187?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sm2' } } },
    { id: 'sm3', name: 'Beach Ball', price: 99, image_url: 'https://images.unsplash.com/photo-1563223552-30d01adcefa3?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sm3' } } }
  ]
};

const mergedBlocks: UIBlock[] = (homePayload.blocks as UIBlock[]).map(block => {
  if (block.type === 'BANNER_HERO') return campaignBanner;
  if (block.type === 'DYNAMIC_COLLECTION') return campaignCollection;
  return block;
});

export const summerPlayhouseCampaign: HomePayload = {
  ...homePayload,
  active_campaign: 'SUMMER_PLAYHOUSE',
  theme: { primary: '#0288D1', secondary: '#80DEEA', background: '#E1F5FE', text: '#1A1A1A' },
  blocks: mergedBlocks
} as HomePayload;
