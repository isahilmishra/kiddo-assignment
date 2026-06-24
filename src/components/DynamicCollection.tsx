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
        snapToInterval={190} // 170 width + 20 margin
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 8 }}
      />
    </View>
  );
};

export const DynamicCollection = memo(DynamicCollectionComponent, (prevProps, nextProps) => {
  return prevProps.node.id === nextProps.node.id;
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  title: {
    fontSize: 22,
    fontWeight: '900',
    marginHorizontal: 20,
    marginBottom: 12,
    letterSpacing: -0.5,
  },
});
