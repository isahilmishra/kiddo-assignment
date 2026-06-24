import React from 'react';
import { BannerHero } from '../components/blocks/BannerHeroBlock';
import { ProductGrid } from '../components/blocks/ProductGrid2x2Block';
import { DynamicCollection } from '../components/blocks/DynamicCollectionBlock';
import { UIBlock, BannerHeroBlock, ProductGrid2x2Block, DynamicCollectionBlock } from '../types/schema';

const BannerHeroWrapper: React.FC<{ data: UIBlock }> = ({ data }) => <BannerHero node={data as BannerHeroBlock} />;
const ProductGridWrapper: React.FC<{ data: UIBlock }> = ({ data }) => <ProductGrid node={data as ProductGrid2x2Block} />;
const DynamicCollectionWrapper: React.FC<{ data: UIBlock }> = ({ data }) => <DynamicCollection node={data as DynamicCollectionBlock} />;

const ComponentRegistry: Record<string, React.ComponentType<{ data: UIBlock }>> = {
  BANNER_HERO: BannerHeroWrapper,
  PRODUCT_GRID_2X2: ProductGridWrapper,
  DYNAMIC_COLLECTION: DynamicCollectionWrapper,
};

export const resolveComponent = (type: string): React.ComponentType<{ data: UIBlock }> | null =>
  ComponentRegistry[type] ?? null;
