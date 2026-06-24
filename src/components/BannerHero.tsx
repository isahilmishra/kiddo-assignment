import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { BannerHeroNode } from '../types/schema';
import { handleAction } from '../dispatcher/ActionDispatcher';

const { width } = Dimensions.get('window');

interface Props {
  node: BannerHeroNode;
}

const BannerHeroComponent: React.FC<Props> = ({ node }) => {
  const content = (
    <View style={styles.container}>
      <Image source={{ uri: node.imageUrl }} style={styles.image} resizeMode="cover" />
      {node.title && (
        <View style={styles.overlay}>
          <Text style={styles.title}>{node.title}</Text>
        </View>
      )}
    </View>
  );

  if (node.action) {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={() => handleAction(node.action)}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

export const BannerHero = memo(BannerHeroComponent, (prevProps, nextProps) => {
  return prevProps.node.id === nextProps.node.id;
});

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 200,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
