import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useCartState, useCartDispatch } from '../../context/CartContext';
import { HomePayload, ProductGrid2x2Block, DynamicCollectionBlock, ProductItem } from '../../types/schema';

interface Props {
  visible: boolean;
  onClose: () => void;
  campaign: HomePayload;
}

export const CartModal: React.FC<Props> = ({ visible, onClose, campaign }) => {
  const { items } = useCartState();
  const dispatch = useCartDispatch();

  const allProducts: Record<string, ProductItem> = {};
  campaign.blocks.forEach((block) => {
    if (block.type === 'PRODUCT_GRID_2X2') {
      (block as ProductGrid2x2Block).products.forEach(p => allProducts[p.id] = p);
    } else if (block.type === 'DYNAMIC_COLLECTION') {
      (block as DynamicCollectionBlock).items.forEach(p => allProducts[p.id] = p);
    }
  });

  const cartItems = Object.entries(items)
    .map(([id, quantity]) => ({ product: allProducts[id], quantity, id }))
    .filter(item => item.product && item.quantity > 0);

  const totalAmount = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <Text style={styles.modalTitle}>Your Cart</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView style={styles.scroll}>
            {cartItems.length === 0 ? (
              <Text style={styles.emptyText}>Your cart is empty!</Text>
            ) : (
              cartItems.map((item) => (
                <View key={item.id} style={styles.cartItemRow}>
                  <Image source={{ uri: item.product.image_url }} style={styles.itemImage} />
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName} numberOfLines={1}>{item.product.name}</Text>
                    <Text style={styles.itemPrice}>₹{item.product.price * item.quantity}</Text>
                  </View>
                  <View style={styles.quantityControls}>
                    <TouchableOpacity onPress={() => dispatch({ type: 'REMOVE', id: item.id })} style={styles.qtyBtn}>
                      <Text style={styles.qtyBtnText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.qtyText}>{item.quantity}</Text>
                    <TouchableOpacity onPress={() => dispatch({ type: 'ADD', id: item.id })} style={styles.qtyBtn}>
                      <Text style={styles.qtyBtnText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </ScrollView>

          {cartItems.length > 0 && (
            <View style={styles.footer}>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalAmount}>₹{totalAmount}</Text>
              </View>
              <TouchableOpacity style={[styles.checkoutBtn, { backgroundColor: campaign.theme.primary }]} onPress={() => { alert('Checkout!'); dispatch({ type: 'CLEAR' }); onClose(); }}>
                <Text style={styles.checkoutText}>Checkout</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalView: { backgroundColor: 'white', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: -4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 5, maxHeight: '80%' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  modalTitle: { fontSize: 22, fontWeight: 'bold' },
  closeBtn: { padding: 8, backgroundColor: '#f0f0f0', borderRadius: 20, width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  closeBtnText: { fontSize: 16, fontWeight: 'bold', color: '#666' },
  scroll: { maxHeight: 400 },
  emptyText: { textAlign: 'center', fontSize: 16, color: '#888', marginTop: 40, marginBottom: 40 },
  cartItemRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16, backgroundColor: '#fff', borderRadius: 12, padding: 10, borderWidth: 1, borderColor: '#eee' },
  itemImage: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  itemInfo: { flex: 1 },
  itemName: { fontSize: 15, fontWeight: '600', marginBottom: 4 },
  itemPrice: { fontSize: 14, color: '#ff4500', fontWeight: 'bold' },
  quantityControls: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: 8 },
  qtyBtn: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center' },
  qtyBtnText: { fontSize: 18, color: '#333' },
  qtyText: { fontSize: 15, fontWeight: 'bold', minWidth: 20, textAlign: 'center' },
  footer: { borderTopWidth: 1, borderColor: '#eee', paddingTop: 16, marginTop: 10 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  totalLabel: { fontSize: 18, color: '#666' },
  totalAmount: { fontSize: 22, fontWeight: 'bold', color: '#000' },
  checkoutBtn: { padding: 16, borderRadius: 12, alignItems: 'center' },
  checkoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});
