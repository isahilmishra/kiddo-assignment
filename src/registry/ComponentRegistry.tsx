import React from 'react';
import { BannerHero } from '../components/BannerHero';
import { ProductGrid } from '../components/ProductGrid';
import { DynamicCollection } from '../components/DynamicCollection';
import { UINode } from '../types/schema';

// Factory Map
const registry: Record<string, React.FC<{ node: any }>> = {
  BANNER_HERO: BannerHero,
  PRODUCT_GRID_2X2: ProductGrid,
  DYNAMIC_COLLECTION: DynamicCollection,
};

export const renderNode = (node: UINode) => {
  const Component = registry[node.type];
  if (!Component) {
    console.warn(`Unrecognized component type: ${node.type}`);
    return null; // Fail gracefully
  }
  return <Component key={node.id} node={node} />;
};
