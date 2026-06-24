import { HomePayload, UIBlock, BannerHeroBlock, DynamicCollectionBlock } from '../types/schema';
import homePayload from '../mock/homePayload.json';

const campaignBanner: BannerHeroBlock = {
  id: 'banner_carnival',
  type: 'BANNER_HERO',
  image_url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1200',
  title: 'Mystery Carnival',
  subtitle: 'Surprises await inside!',
  action: { type: 'DEEP_LINK', payload: { url: '/campaign/carnival' } }
};

const campaignCollection: DynamicCollectionBlock = {
  id: 'collection_carnival',
  type: 'DYNAMIC_COLLECTION',
  theme_label: 'Mystery Hampers',
  items: [
    { id: 'mc1', name: 'Surprise Box Basic', price: 499, image_url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400', action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { code: 'MYSTERY1' } } },
    { id: 'mc2', name: 'Jumbo Hamper', price: 999, image_url: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400', action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { code: 'MYSTERY2' } } },
    { id: 'mc3', name: 'Cotton Candy Kit', price: 149, image_url: 'https://images.unsplash.com/photo-1574512760205-09852899bf9f?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'mc3' } } }
  ]
};

const mergedBlocks: UIBlock[] = (homePayload.blocks as UIBlock[]).map(block => {
  if (block.type === 'BANNER_HERO') return campaignBanner;
  if (block.type === 'DYNAMIC_COLLECTION') return campaignCollection;
  return block;
});

export const mysteryGiftCarnivalCampaign: HomePayload = {
  ...homePayload,
  active_campaign: 'MYSTERY_GIFT_CARNIVAL',
  theme: { primary: '#D32F2F', secondary: '#FF8F00', background: '#FFF3E0', text: '#1A1A1A' },
  blocks: mergedBlocks
} as HomePayload;
