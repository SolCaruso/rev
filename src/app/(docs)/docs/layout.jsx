// ✅ New app/docs/layout.jsx (no <html>, no <body>)
import glob from 'fast-glob'
import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Protocol API Reference',
    default: 'Protocol API Reference',
  },
}

export default async function DocsLayout({ children }) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app/docs/docs' })
  let allSectionsEntries = await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )
  let allSections = Object.fromEntries(allSectionsEntries)

  // Just wrap your doc content in Providers + whatever doc layout
  return (
    <Providers>
      <Layout allSections={allSections}>{children}</Layout>
    </Providers>
  )
}