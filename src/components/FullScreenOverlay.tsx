import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { FullScreenOverlayNode } from '../types/schema';

interface Props {
  node?: FullScreenOverlayNode;
}

const FullScreenOverlayComponent: React.FC<Props> = ({ node }) => {
  if (!node) return null;

  return (
    <View style={styles.overlay} pointerEvents="none">
      <LottieView
        source={{ uri: node.animation_url }}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

export const FullScreenOverlay = memo(FullScreenOverlayComponent, (prevProps, nextProps) => {
  return prevProps.node?.id === nextProps.node?.id;
});

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999,
  },
  animation: {
    width: '100%',
    height: '100%',
  },
});
