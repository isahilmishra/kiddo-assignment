import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { BannerHeroBlock as BannerHeroNode } from '../../types/schema';
import { handleAction } from '../../actions/ActionDispatcher';

const { width } = Dimensions.get('window');

interface Props {
  node: BannerHeroNode;
}

const BannerHeroComponent: React.FC<Props> = ({ node }) => {
  const content = (
    <View style={styles.container}>
      <Image source={{ uri: node.image_url }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title}>{node.title}</Text>
        {node.subtitle && <Text style={styles.subtitle}>{node.subtitle}</Text>}
      </View>
    </View>
  );

  if (node.action) {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={() => handleAction(node.action!)}>
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
    width: width - 40,
    marginHorizontal: 20,
    height: 200,
    borderRadius: 24,
    overflow: 'hidden',
    marginVertical: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    letterSpacing: -0.5,
  },
  subtitle: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
  }
});
