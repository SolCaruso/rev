import glob from 'fast-glob'
import { Layout } from '@/components/Layout'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'Revolver.ag',
    default: 'Revolver.ag',
  },
}

export default async function RootLayout({ children }) {
  // Same default logic scanning .mdx
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="flex
        min-h-full
        bg-[#07080A]
        antialiased">
          <div className="w-full">
            {/* Our pinned doc layout component */}
            <Layout allSections={allSections}>{children}</Layout>
          </div>
      </body>
    </html>
  )
}