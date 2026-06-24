import React, { createContext, useContext, ReactNode } from 'react';
import { ThemeConfig } from '../types/schema';

const defaultTheme: ThemeConfig = {
  primary: '#000000',
  secondary: '#333333',
  background: '#ffffff',
  text: '#333333',
};

const ThemeContext = createContext<ThemeConfig>(defaultTheme);

export const ThemeProvider = ({ theme, children }: { theme: ThemeConfig; children: ReactNode }) => (
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
