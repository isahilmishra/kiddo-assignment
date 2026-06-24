import React, { memo } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { resolveComponent } from '../registry/ComponentRegistry';
import { UIBlock, HomePayload } from '../types/schema';
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import { backToSchoolCampaign } from '../campaigns/backToSchool';
import { summerPlayhouseCampaign } from '../campaigns/summerPlayhouse';
import { mysteryGiftCarnivalCampaign } from '../campaigns/mysteryGiftCarnival';
import { FullScreenOverlay } from '../components/blocks/FullScreenOverlay';
import { CartBadge } from '../components/ui/CartBadge';

const campaigns = {
  BACK_TO_SCHOOL: backToSchoolCampaign,
  SUMMER_PLAYHOUSE: summerPlayhouseCampaign,
  MYSTERY_GIFT_CARNIVAL: mysteryGiftCarnivalCampaign,
};

const RenderBlock = memo(({ block }: { block: UIBlock }) => {
  const Component = resolveComponent(block.type);
  if (!Component) return null;
  return <Component data={block} />;
});

export const HomeScreen = () => {
  const [activeCampaignKey, setActiveCampaignKey] = React.useState<keyof typeof campaigns>('BACK_TO_SCHOOL');
  const activeCampaign = campaigns[activeCampaignKey];

  return (
    <ThemeProvider theme={activeCampaign.theme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: activeCampaign.theme.background }}>
        
        {/* Header */}
        <View style={[styles.header, { backgroundColor: activeCampaign.theme.background }]}>
          <Text style={[styles.headerText, { color: activeCampaign.theme.text }]}>Kiddo</Text>
          <View style={styles.cartButton}>
            <Text style={[styles.cartButtonText, { color: activeCampaign.theme.text }]}>Cart</Text>
            <CartBadge />
          </View>
        </View>

        {/* Campaign Switcher */}
        <View style={styles.switcher}>
          {(Object.keys(campaigns) as Array<keyof typeof campaigns>).map((key) => (
            <TouchableOpacity 
              key={key} 
              style={[styles.tabBtn, activeCampaignKey === key && { backgroundColor: activeCampaign.theme.primary }]}
              onPress={() => setActiveCampaignKey(key)}
            >
              <Text style={[styles.tabBtnText, activeCampaignKey === key && { color: '#fff' }]}>
                {key.replace(/_/g, ' ')}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Master FlashList Feed */}
        <FlashList
          data={activeCampaign.blocks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <RenderBlock block={item} />}
          estimatedItemSize={250}
          showsVerticalScrollIndicator={false}
        />

        {/* Overlay Engine */}
        <FullScreenOverlay node={{ id: 'overlay-engine', type: 'FULL_SCREEN_OVERLAY', animation_url: activeCampaignKey === 'SUMMER_PLAYHOUSE' ? 'water' : 'confetti' }} />

      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
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
    fontSize: 28,
    fontWeight: '900',
    letterSpacing: -1,
  },
  cartButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  cartButtonText: {
    fontSize: 16,
    fontWeight: '800',
  },
  switcher: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    backgroundColor: 'transparent',
    marginBottom: 8,
  },
  tabBtn: {
    paddingHorizontal: 12,
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
    fontSize: 12,
  }
});
