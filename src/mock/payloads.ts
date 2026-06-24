import { LayoutPayload } from '../types/schema';

// 1. 'Back to School' Mega-Sale
export const backToSchoolPayload: LayoutPayload = {
  theme: {
    primary: '#F5A623', // Warm Yellow-Orange
    background: '#F0F4F8', // Soft light blue bg
    text: '#333333',
    card: '#FFFFFF',
  },
  overlay: {
    id: 'overlay-1',
    type: 'FULL_SCREEN_OVERLAY',
    animation_url: '' 
  },
  components: [
    {
      id: 'hero-1',
      type: 'BANNER_HERO',
      imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      title: 'Back to School Mega-Sale',
    },
    {
      id: 'grid-1',
      type: 'PRODUCT_GRID_2X2',
      products: [
        { id: 'p1', name: 'Premium Backpack', price: 1499, imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p1' } } },
        { id: 'p2', name: 'Lunchbox Set', price: 599, imageUrl: 'https://images.unsplash.com/photo-1590080876408-01119b4b0e50?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p2' } } },
        { id: 'p3', name: 'Insulated Bottle', price: 899, imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p3' } } },
        { id: 'p4', name: 'Spiral Notebooks', price: 299, imageUrl: 'https://images.unsplash.com/photo-1531346878377-a541fa4cb5bf?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p4' } } },
        { id: 'p5', name: 'Art Supplies Kit', price: 1299, imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p5' } } },
        { id: 'p6', name: 'Geometry Box', price: 199, imageUrl: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p6' } } },
      ]
    },
    {
      id: 'dyn-1',
      type: 'DYNAMIC_COLLECTION',
      title: 'Top Rated Essentials',
      items: [
        { id: 'p7', name: 'Kids Shoes', price: 1599, imageUrl: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p7' } } },
        { id: 'p8', name: 'School Uniform', price: 899, imageUrl: 'https://images.unsplash.com/photo-1620055207797-024f923c3b03?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p8' } } },
        { id: 'p9', name: 'Pencil Pouch', price: 250, imageUrl: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p9' } } },
        { id: 'p10', name: 'Highlighters Set', price: 150, imageUrl: 'https://images.unsplash.com/photo-1568205612837-017257d2310a?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p10' } } },
        { id: 'p11', name: 'Scientific Calc', price: 1100, imageUrl: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p11' } } },
      ]
    }
  ]
};

// 2. 'Summer Playhouse' Festival
export const summerPlayhousePayload: LayoutPayload = {
  theme: {
    primary: '#00A8CC', // Vibrant Ocean Blue
    background: '#E8F6F8', // Very light cyan
    text: '#1C3144',
    card: '#FFFFFF',
  },
  overlay: {
    id: 'overlay-2',
    type: 'FULL_SCREEN_OVERLAY',
    animation_url: ''
  },
  components: [
    {
      id: 'hero-2',
      type: 'BANNER_HERO',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      title: 'Summer Playhouse',
    },
    {
      id: 'dyn-2',
      type: 'DYNAMIC_COLLECTION',
      title: 'Beach & Pool Fun',
      items: [
        { id: 'p12', name: 'Inflatable Pool', price: 2500, imageUrl: 'https://images.unsplash.com/photo-1534068590799-09895a701e3e?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p12' } } },
        { id: 'p13', name: 'Beach Towel', price: 599, imageUrl: 'https://images.unsplash.com/photo-1520108343710-09e8631168db?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p13' } } },
        { id: 'p14', name: 'Sunscreen Lotion', price: 350, imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p14' } } },
        { id: 'p15', name: 'Swim Goggles', price: 450, imageUrl: 'https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p15' } } },
        { id: 'p16', name: 'Water Gun toy', price: 899, imageUrl: 'https://images.unsplash.com/photo-1620050853580-1a7337cb1e5d?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p16' } } },
      ]
    }
  ]
};

// 3. 'Mystery Gift Carnival'
export const mysteryGiftPayload: LayoutPayload = {
  theme: {
    primary: '#E63946', // Punchy Red
    background: '#FFF3F3', // Very light red/pink
    text: '#4A1515',
    card: '#FFFFFF',
  },
  overlay: {
    id: 'overlay-3',
    type: 'FULL_SCREEN_OVERLAY',
    animation_url: ''
  },
  components: [
    {
      id: 'hero-3',
      type: 'BANNER_HERO',
      imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
      title: 'Mystery Gift Carnival',
      action: { type: 'APPLY_MYSTERY_GIFT_COUPON', payload: {} }
    },
    {
      id: 'grid-3',
      type: 'PRODUCT_GRID_2X2',
      products: [
        { id: 'p17', name: 'Mystery Box Mini', price: 999, imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p17' } } },
        { id: 'p18', name: 'Mystery Box Mega', price: 2499, imageUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p18' } } },
        { id: 'p19', name: 'Carnival Teddy', price: 799, imageUrl: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p19' } } },
        { id: 'p20', name: 'Party Popper', price: 199, imageUrl: 'https://images.unsplash.com/photo-1495554378774-8b63b2fcd1b2?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p20' } } },
        { id: 'p21', name: 'Ferris Wheel Toy', price: 1599, imageUrl: 'https://images.unsplash.com/photo-1524143890250-9d042af0797d?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p21' } } },
        { id: 'p22', name: 'Cotton Candy Kit', price: 699, imageUrl: 'https://images.unsplash.com/photo-1576402633003-885ecb49ca23?auto=format&fit=crop&w=400&q=80', action: { type: 'ADD_TO_CART', payload: { id: 'p22' } } },
      ]
    }
  ]
};

export const campaigns = {
  backToSchool: backToSchoolPayload,
  summerPlayhouse: summerPlayhousePayload,
  mysteryGift: mysteryGiftPayload,
};
