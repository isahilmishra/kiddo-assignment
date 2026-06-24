import React, { createContext, useContext, ReactNode } from 'react';
import { ThemeConfig } from '../types/schema';

const defaultTheme: ThemeConfig = {
  primary: '#000000',
  background: '#ffffff',
  text: '#333333',
  card: '#f9f9f9',
};

const ThemeContext = createContext<ThemeConfig>(defaultTheme);

export const ThemeProvider: React.FC<{ theme: ThemeConfig; children: ReactNode }> = ({ theme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
