import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { ProductGrid2x2Block as ProductGridNode } from '../../types/schema';
import { ProductCard } from '../ui/ProductCard';

interface Props {
  node: ProductGridNode;
}

const ProductGridComponent: React.FC<Props> = ({ node }) => {
  return (
    <View style={styles.grid}>
      {node.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </View>
  );
};

export const ProductGrid = memo(ProductGridComponent, (prevProps, nextProps) => {
  return prevProps.node.id === nextProps.node.id;
});

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginVertical: 16,
  }
});
