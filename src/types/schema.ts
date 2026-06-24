export type ComponentType = 
  | 'BANNER_HERO' 
  | 'PRODUCT_GRID_2X2' 
  | 'DYNAMIC_COLLECTION' 
  | 'FULL_SCREEN_OVERLAY';

export interface ActionSchema {
  type: string;
  payload: Record<string, any>;
}

export interface NodeBase {
  id: string;
  type: ComponentType | string; // Allow string for resilience testing
  action?: ActionSchema;
}

export interface BannerHeroNode extends NodeBase {
  type: 'BANNER_HERO';
  imageUrl: string;
  title?: string;
}

export interface ProductNode {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  action?: ActionSchema;
}

export interface ProductGridNode extends NodeBase {
  type: 'PRODUCT_GRID_2X2';
  products: ProductNode[];
}

export interface DynamicCollectionNode extends NodeBase {
  type: 'DYNAMIC_COLLECTION';
  title: string;
  items: ProductNode[];
}

export interface FullScreenOverlayNode extends NodeBase {
  type: 'FULL_SCREEN_OVERLAY';
  animation_url: string;
}

export type UINode = BannerHeroNode | ProductGridNode | DynamicCollectionNode | FullScreenOverlayNode | NodeBase;

export interface ThemeConfig {
  primary: string;
  background: string;
  text?: string;
  card?: string;
}

export interface LayoutPayload {
  theme: ThemeConfig;
  overlay?: FullScreenOverlayNode;
  components: UINode[];
}
