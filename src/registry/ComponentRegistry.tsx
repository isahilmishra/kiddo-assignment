import React from 'react';
import { BannerHero } from '../components/blocks/BannerHeroBlock';
import { ProductGrid } from '../components/blocks/ProductGrid2x2Block';
import { DynamicCollection } from '../components/blocks/DynamicCollectionBlock';

const ComponentRegistry: Record<string, React.ComponentType<{ data: any }>> = {
  BANNER_HERO: (props) => <BannerHero node={props.data} />,
  PRODUCT_GRID_2X2: (props) => <ProductGrid node={props.data} />,
  DYNAMIC_COLLECTION: (props) => <DynamicCollection node={props.data} />,
};

export const resolveComponent = (type: string) => ComponentRegistry[type] ?? null;
