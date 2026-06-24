import { HomePayload } from '../types/schema';

export const summerPlayhouseCampaign: HomePayload = {
  theme: { primary: '#0288D1', secondary: '#80DEEA', background: '#E1F5FE', text: '#1A1A1A' },
  active_campaign: 'SUMMER_PLAYHOUSE',
  blocks: [
    {
      id: 'summer_banner',
      type: 'BANNER_HERO',
      image_url: 'https://images.unsplash.com/photo-1534064567232-a63e9f4eb1bf?w=1200',
      title: 'Summer Playhouse Festival',
      subtitle: 'Cool deals for the season',
      action: { type: 'DEEP_LINK', payload: { url: '/campaign/summer' } }
    },
    {
      id: 'summer_grid',
      type: 'PRODUCT_GRID_2X2',
      products: [
        { id: 'sum1', name: 'Beach Ball', price: 99, image_url: 'https://images.unsplash.com/photo-1563223552-30d01adcefa3?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sum1' } } },
        { id: 'sum2', name: 'Sunscreen SPF 50', price: 349, image_url: 'https://images.unsplash.com/photo-1526413425697-1d271fdbe7a9?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sum2' } } },
        { id: 'sum3', name: 'Swimwear Set', price: 899, image_url: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sum3' } } },
        { id: 'sum4', name: 'Water Gun', price: 299, image_url: 'https://images.unsplash.com/photo-1533089456208-c84013146b2b?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sum4' } } }
      ]
    },
    {
      id: 'summer_collection',
      type: 'DYNAMIC_COLLECTION',
      theme_label: 'Summer Essentials',
      items: [
        { id: 'sum5', name: 'Sand Bucket Kit', price: 149, image_url: 'https://images.unsplash.com/photo-1627993092523-289da0151187?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sum5' } } },
        { id: 'sum6', name: 'Outdoor Hat', price: 199, image_url: 'https://images.unsplash.com/photo-1521369909029-133eb870e060?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sum6' } } },
        { id: 'sum7', name: 'Flip Flops', price: 249, image_url: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sum7' } } },
        { id: 'sum8', name: 'Inflatable Pool', price: 1299, image_url: 'https://images.unsplash.com/photo-1582216503610-643c7b39cece?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sum8' } } }
      ]
    },
    {
      id: 'summer_zoo',
      type: 'DYNAMIC_COLLECTION',
      theme_label: 'Petting Zoo Tickets',
      items: [
        { id: 'sum_zoo1', name: 'Zoo Pass (Child)', price: 99, image_url: 'https://images.unsplash.com/photo-1564758564527-b8af326569eb?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sum_zoo1' } } },
        { id: 'sum_zoo2', name: 'Zoo Pass (Adult)', price: 199, image_url: 'https://images.unsplash.com/photo-1564758564527-b8af326569eb?w=400', action: { type: 'ADD_TO_CART', payload: { id: 'sum_zoo2' } } }
      ]
    },
    { id: 'block_unknown_summerPlayhouse', type: 'NEW_COMPONENT_V2', data: {} }
  ]
};
