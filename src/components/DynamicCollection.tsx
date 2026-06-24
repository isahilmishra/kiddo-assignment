import React, { memo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { DynamicCollectionNode } from '../types/schema';
import { ProductCard } from './ProductCard';
import { useTheme } from '../theme/ThemeContext';

interface Props {
  node: DynamicCollectionNode;
}

const DynamicCollectionComponent: React.FC<Props> = ({ node }) => {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.text }]}>{node.title}</Text>
      <FlatList
        data={node.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={4}
        windowSize={3}
      />
    </View>
  );
};

export const DynamicCollection = memo(DynamicCollectionComponent, (prevProps, nextProps) => {
  return prevProps.node.id === nextProps.node.id;
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 8,
  },
});
