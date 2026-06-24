import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { ProductGridNode } from '../types/schema';
import { ProductCard } from './ProductCard';

interface Props {
  node: ProductGridNode;
}

const ProductGridComponent: React.FC<Props> = ({ node }) => {
  return (
    <View style={styles.container}>
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
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});
