import { ActionPayload } from './actions';

export interface ThemeConfig {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

export interface BaseBlock {
  id: string;
  type: string;
  action?: ActionPayload;
}

export interface BannerHeroBlock extends BaseBlock {
  type: 'BANNER_HERO';
  image_url: string;
  title: string;
  subtitle?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  image_url: string;
  action: ActionPayload;
}

export interface ProductGrid2x2Block extends BaseBlock {
  type: 'PRODUCT_GRID_2X2';
  products: [ProductItem, ProductItem, ProductItem, ProductItem];
}

export interface DynamicCollectionBlock extends BaseBlock {
  type: 'DYNAMIC_COLLECTION';
  theme_label: string;
  items: ProductItem[];
}

export interface UnknownBlock extends BaseBlock {
  [key: string]: any;
}

export type UIBlock = BannerHeroBlock | ProductGrid2x2Block | DynamicCollectionBlock | UnknownBlock;

export interface HomePayload {
  theme: ThemeConfig;
  active_campaign: 'BACK_TO_SCHOOL' | 'SUMMER_PLAYHOUSE' | 'MYSTERY_GIFT_CARNIVAL';
  blocks: UIBlock[];
}

export interface FullScreenOverlayNode {
  id: string;
  type: 'FULL_SCREEN_OVERLAY';
  animation_url: string;
}
