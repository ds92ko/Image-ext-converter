'use client';

import { darkTheme, lightTheme } from '@/styles/vars.css';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightTheme,
        dark: darkTheme
      }}
    >
      {children}
    </ThemeProvider>
  );
};

export default Provider;
