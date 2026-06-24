import { HomePayload } from '../types/schema';

export const backToSchoolCampaign: HomePayload = {
  theme: { primary: '#FFD700', secondary: '#1565C0', background: '#FFFDE7', text: '#1A1A1A' },
  active_campaign: 'BACK_TO_SCHOOL',
  blocks: [
    {
      id: 'bts_banner',
      type: 'BANNER_HERO',
      image_url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200',
      title: 'Back to School Mega Sale',
      subtitle: 'Up to 50% off on school essentials',
      action: { type: 'DEEP_LINK', payload: { url: '/campaign/bts' } }
    },
    {
      id: 'bts_grid',
      type: 'PRODUCT_GRID_2X2',
      products: [
        { id: 'bts1', name: 'Lunchbox', price: 299, image_url: 'https://images.unsplash.com/photo-1596755458022-b5e1b26f53da?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'bts1' } } },
        { id: 'bts2', name: 'School Bag', price: 899, image_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'bts2' } } },
        { id: 'bts3', name: 'Water Bottle', price: 199, image_url: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'bts3' } } },
        { id: 'bts4', name: 'Pencil Kit', price: 149, image_url: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'bts4' } } }
      ]
    },
    {
      id: 'bts_collection',
      type: 'DYNAMIC_COLLECTION',
      theme_label: 'Lunchboxes & Bags',
      items: [
        { id: 'bts5', name: 'Geometry Box', price: 99, image_url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'bts5' } } },
        { id: 'bts6', name: 'Crayons', price: 49, image_url: 'https://images.unsplash.com/photo-1560421683-6856fea585c7?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'bts6' } } },
        { id: 'bts7', name: 'Notebooks', price: 199, image_url: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'bts7' } } },
        { id: 'bts8', name: 'Tiffin Box', price: 249, image_url: 'https://images.unsplash.com/photo-1596755458022-b5e1b26f53da?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'bts8' } } }
      ]
    },
    { id: 'block_unknown_backToSchool', type: 'NEW_COMPONENT_V2', data: {} }
  ]
};
