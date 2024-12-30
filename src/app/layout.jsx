// app/layout.jsx
import { Providers } from '@/app/providers'
import { HeaderRoot } from '@/components/HeaderRoot'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Protocol API Reference',
    default: 'Protocol API Reference',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-white antialiased dark:bg-zinc-900">
        <Providers>
          <HeaderRoot />
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  )
}