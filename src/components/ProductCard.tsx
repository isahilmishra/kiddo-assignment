import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ProductNode } from '../types/schema';
import { useTheme } from '../theme/ThemeContext';
import { handleAction } from '../dispatcher/ActionDispatcher';
import { useCartStore } from '../store/cartStore';

interface Props {
  product: ProductNode;
}

const ProductCardComponent: React.FC<Props> = ({ product }) => {
  const theme = useTheme();
  const quantity = useCartStore((state) => state.items[product.id]?.quantity || 0);
  const increment = useCartStore((state) => state.increment);
  const decrement = useCartStore((state) => state.decrement);

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Image source={{ uri: product.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={[styles.price, { color: theme.primary }]}>₹{product.price}</Text>
      </View>
      
      <View style={styles.actionContainer}>
        {quantity > 0 ? (
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => decrement(product.id)} style={[styles.qtyBtn, { borderColor: theme.primary }]}>
              <Text style={[styles.qtyBtnText, { color: theme.primary }]}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.quantityText, { color: theme.text }]}>{quantity}</Text>
            <TouchableOpacity onPress={() => increment(product)} style={[styles.qtyBtn, { backgroundColor: theme.primary }]}>
              <Text style={[styles.qtyBtnText, { color: '#fff' }]}>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: theme.primary }]}
            onPress={() => handleAction(product.action, product)}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const ProductCard = memo(ProductCardComponent, (prevProps, nextProps) => {
  return prevProps.product.id === nextProps.product.id;
});

const styles = StyleSheet.create({
  card: {
    width: 160,
    borderRadius: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  infoContainer: {
    padding: 10,
    paddingBottom: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    letterSpacing: -0.3,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
  },
  actionContainer: {
    padding: 10,
    paddingTop: 6,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 2,
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  qtyBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 14,
    fontWeight: '600',
    minWidth: 20,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },
});
