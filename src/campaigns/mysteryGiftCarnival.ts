import { HomePayload } from '../types/schema';

export const mysteryGiftCarnivalCampaign: HomePayload = {
  theme: { primary: '#D32F2F', secondary: '#FF8F00', background: '#FFF3E0', text: '#1A1A1A' },
  active_campaign: 'MYSTERY_GIFT_CARNIVAL',
  blocks: [
    {
      id: 'carnival_banner',
      type: 'BANNER_HERO',
      image_url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200',
      title: 'Mystery Gift Carnival',
      subtitle: 'Spin the wheel of surprises!',
      action: { type: 'DEEP_LINK', payload: { url: '/campaign/carnival' } }
    },
    {
      id: 'carnival_grid',
      type: 'PRODUCT_GRID_2X2',
      products: [
        { id: 'mg1', name: 'Mystery Gift Box', price: 999, image_url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400', action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { id: 'mg1', code: 'CARNIVAL50' } } },
        { id: 'mg2', name: 'Surprise Hamper', price: 1499, image_url: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400', action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { id: 'mg2', code: 'CARNIVAL50' } } },
        { id: 'mg3', name: 'Carnival Candy Pack', price: 299, image_url: 'https://images.unsplash.com/photo-1574512760205-09852899bf9f?w=400', action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { id: 'mg3', code: 'CARNIVAL50' } } },
        { id: 'mg4', name: 'Lucky Dip Toy', price: 199, image_url: 'https://images.unsplash.com/photo-1558066160-c397554f6764?w=400', action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { id: 'mg4', code: 'CARNIVAL50' } } }
      ]
    },
    {
      id: 'carnival_collection',
      type: 'DYNAMIC_COLLECTION',
      theme_label: 'Mystery Deals',
      items: [
        { id: 'mg5', name: 'Gift Ribbon Set', price: 99, image_url: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=400', action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { id: 'mg5', code: 'CARNIVAL50' } } },
        { id: 'mg6', name: 'Confetti Popper', price: 149, image_url: 'https://images.unsplash.com/photo-1530103862676-de8892bf309c?w=400', action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { id: 'mg6', code: 'CARNIVAL50' } } },
        { id: 'mg7', name: 'Magic Wand Toy', price: 249, image_url: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=400', action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { id: 'mg7', code: 'CARNIVAL50' } } },
        { id: 'mg8', name: 'Party Blower', price: 49, image_url: 'https://images.unsplash.com/photo-1601312384666-88099d07c08a?w=400', action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: { id: 'mg8', code: 'CARNIVAL50' } } }
      ]
    },
    { id: 'block_unknown_mysteryGiftCarnival', type: 'NEW_COMPONENT_V2', data: {} }
  ]
};
