import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ProductItem } from '../../types/schema';
import { useTheme } from '../../context/ThemeContext';
import { handleAction } from '../../actions/ActionDispatcher';
import { useCartDispatch } from '../../context/CartContext';

interface Props {
  product: ProductItem;
}

const ProductCardComponent: React.FC<Props> = ({ product }) => {
  const theme = useTheme();
  const dispatch = useCartDispatch();

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Image source={{ uri: product.image_url }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={[styles.name, { color: theme.text }]} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={[styles.price, { color: theme.primary }]}>₹{product.price}</Text>
      </View>
      
      <View style={styles.actionContainer}>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={() => handleAction({ ...product.action!, payload: { ...product.action?.payload, id: product.id } }, dispatch)}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const ProductCard = memo(ProductCardComponent, (prevProps, nextProps) => {
  return prevProps.product.id === nextProps.product.id;
});

const styles = StyleSheet.create({
  card: {
    width: 170,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 12,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.02)',
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  infoContainer: {
    padding: 14,
    paddingBottom: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 6,
    letterSpacing: -0.4,
  },
  price: {
    fontSize: 16,
    fontWeight: '800',
  },
  actionContainer: {
    padding: 14,
    paddingTop: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 4,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  qtyBtnText: {
    fontSize: 18,
    fontWeight: '800',
  },
  quantityText: {
    fontSize: 15,
    fontWeight: '700',
    minWidth: 24,
    textAlign: 'center',
  },
  button: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
});
