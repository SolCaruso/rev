// app/layout.jsx
import '@/styles/tailwind.css'
import { Providers } from '@/app/providers'

export const metadata = { title: 'Root Layout' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white dark:bg-zinc-900">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}