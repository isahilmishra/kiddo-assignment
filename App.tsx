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
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 5,
    zIndex: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: -1,
  },
  cartButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
  switcher: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 16,
    backgroundColor: 'transparent',
    marginBottom: 8,
  },
  tabBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  tabBtnText: {
    fontWeight: '700',
    color: '#444',
    fontSize: 14,
  }
});
