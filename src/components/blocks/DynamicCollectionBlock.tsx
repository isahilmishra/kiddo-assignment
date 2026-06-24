import React, { memo } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { DynamicCollectionBlock as DynamicCollectionNode } from '../../types/schema';
import { ProductCard } from '../ui/ProductCard';

const ITEM_WIDTH = 190;

interface Props {
  node: DynamicCollectionNode;
}

const DynamicCollectionComponent: React.FC<Props> = ({ node }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{node.theme_label}</Text>
      <FlatList
        data={node.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        horizontal
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, index) => ({ length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index })}
        initialNumToRender={4}
        windowSize={3}
        snapToInterval={ITEM_WIDTH} // 170 width + 20 margin
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 8, flexGrow: 1, justifyContent: 'center' }}
      />
    </View>
  );
};

export const DynamicCollection = memo(DynamicCollectionComponent);

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
