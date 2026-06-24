import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCartState } from '../../context/CartContext';

export const CartBadge = () => {
  const { items } = useCartState();
  const count = Object.values(items).reduce((acc, curr) => acc + curr, 0);

  if (count === 0) return null;

  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#E53935',
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  }
});
