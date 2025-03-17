"use client"

import { usePathname } from "next/navigation"
import { SectionProvider } from "@/components/SectionProvider"
import { Footer } from "@/components/Footer"
import { DocsHeader } from "@/components/DocsHeader"
import { NonDocsHeader } from "@/components/NonDocsHeader"

export function Layout({ children, allSections }) {
  let pathname = usePathname()
  let isDocs = pathname.startsWith('/docs')
  let docSections = isDocs ? allSections[pathname] ?? [] : []

  return (
    <SectionProvider sections={docSections}>
      <div className="h-full">
        {isDocs ? <DocsHeader /> : <NonDocsHeader />}
        <div
          className={
            isDocs
              ? "relative flex h-full flex-col lg:ml-72 xl:ml-80 px-4 pt-14 sm:px-6 lg:px-8"
              : "relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8"
          }
        >
          <main className="flex-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}