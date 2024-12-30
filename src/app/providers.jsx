"use client"

import { ThemeProvider } from "next-themes"

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="theme"  // The key used in localStorage
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}