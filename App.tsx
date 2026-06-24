import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { campaigns } from './src/mock/payloads';
import { renderNode } from './src/registry/ComponentRegistry';
import { ThemeProvider } from './src/theme/ThemeContext';
import { FullScreenOverlay } from './src/components/FullScreenOverlay';
import { CartModal } from './src/components/CartModal';
import { LayoutPayload, UINode } from './src/types/schema';
import { useCartStore } from './src/store/cartStore';

export default function App() {
  const [activeCampaign, setActiveCampaign] = useState<LayoutPayload>(campaigns.backToSchool);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const items = useCartStore((state) => state.items);
  const cartItemCount = Object.values(items).reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <ThemeProvider theme={activeCampaign.theme}>
      <SafeAreaView style={[styles.container, { backgroundColor: activeCampaign.theme.background }]}>
        <View style={[styles.header, { backgroundColor: activeCampaign.theme.primary }]}>
          <Text style={styles.headerText}>Kiddo</Text>
          <TouchableOpacity onPress={() => setIsCartVisible(true)} style={styles.cartButton}>
            <Text style={styles.cartButtonText}>Cart ({cartItemCount})</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.switcher}>
          <TouchableOpacity style={styles.tabBtn} onPress={() => setActiveCampaign(campaigns.backToSchool)}>
            <Text style={styles.tabBtnText}>🎒 School</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBtn} onPress={() => setActiveCampaign(campaigns.summerPlayhouse)}>
            <Text style={styles.tabBtnText}>🏖️ Summer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBtn} onPress={() => setActiveCampaign(campaigns.mysteryGift)}>
            <Text style={styles.tabBtnText}>🎪 Carnival</Text>
          </TouchableOpacity>
        </View>

        <FlashList
          data={activeCampaign.components}
          renderItem={({ item }) => renderNode(item as UINode)}
          keyExtractor={(item) => (item as UINode).id}
          estimatedItemSize={200}
        />
        
        <FullScreenOverlay node={activeCampaign.overlay} />
        <CartModal visible={isCartVisible} onClose={() => setIsCartVisible(false)} />
        <StatusBar style="auto" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  headerText: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  cartButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  switcher: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 8,
  },
  tabBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
  },
  tabBtnText: {
    fontWeight: '600',
    color: '#333',
  }
});
