import React from 'react';
import { CartProvider } from './src/context/CartContext';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <CartProvider>
      <HomeScreen />
    </CartProvider>
  );
}
