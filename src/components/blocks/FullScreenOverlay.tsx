import React, { memo } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import LottieView from 'lottie-react-native';
import { FullScreenOverlayNode } from '../../types/schema';
import { useUIStore } from '../../store/uiStore';

interface Props {
  node?: FullScreenOverlayNode;
}

const FullScreenOverlayComponent: React.FC<Props> = ({ node }) => {
  const { isOverlayActive, hideOverlay } = useUIStore();

  if (!node || !node.animation_url || !isOverlayActive) return null;

  // Since web throws CORS 403 on remote lottie.host JSONs, we'll map known strings to the local files we just grabbed
  let animationSource;
  if (node.animation_url.includes('confetti')) {
    animationSource = require('../../assets/confetti.json');
  } else if (node.animation_url.includes('water')) {
    animationSource = require('../../assets/water.json');
  }

  if (!animationSource) return null;

  return (
    <View 
      style={[StyleSheet.absoluteFillObject, { zIndex: 999 }]}
      pointerEvents="none"
    >
      <LottieView
        source={animationSource}
        autoPlay={true}
        loop={false}
        onAnimationFinish={hideOverlay}
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
