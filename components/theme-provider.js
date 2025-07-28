// app/providers.js
// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';

// const ThemeContext = createContext({ theme: 'light', setTheme: () => {} });

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light');
  
//   useEffect(() => {
//     // On component mount, check local storage
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     setTheme(savedTheme);
//   }, []);

//   useEffect(() => {
//     // When theme changes, update document
//     const root = document.documentElement;
//     root.classList.remove('light', 'dark');
//     root.classList.add(theme);
//     root.style.colorScheme = theme;
//     // Save to localStorage
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export const useTheme = () => useContext(ThemeContext);










"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}) {
  return <NextThemesProvider
    
    {...props}>
    {children}</NextThemesProvider>
}