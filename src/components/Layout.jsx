"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Logo } from "@/components/Logo"
import { Navigation } from "@/components/Navigation"
import { SectionProvider } from "@/components/SectionProvider"

export function Layout({ children, allSections }) {
  const pathname = usePathname()
  // We consider any route under /docs to be a doc route
  const isDocs = pathname.startsWith("/docs")

  // Grab the relevant doc sections if any
  const sectionsForThisPage = allSections[pathname] ?? []

  return (
    <SectionProvider sections={sectionsForThisPage}>
      {/* 
        If doc route, offset left for pinned sidebar 
        Else normal layout 
      */}
      <div className={isDocs ? "h-full lg:ml-72 xl:ml-80" : "h-full"}>
        {isDocs ? (
          /* ------------- DOC ROUTE PINNED LAYOUT ------------- */
          <motion.header
            layoutScroll
            className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
          >
            <div
              className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto 
                         lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80
                         lg:dark:border-white/10"
            >
              {/* Pinned doc logo (desktop only) */}
              <div className="hidden lg:flex mb-4">
                <Link href="/" aria-label="Home">
                  <Logo className="h-6" />
                </Link>
              </div>
              {/* Renders doc route’s search & nav on top, or you can skip */}
              <Header />
              <Navigation className="hidden lg:mt-10 lg:block" />
            </div>
          </motion.header>
        ) : (
          /* ------------- NON-DOC ROUTE ------------- */
          <Header />
        )}

        {/* 
          Main content area, under the header 
          We do pt-14 to avoid overlap with the fixed header 
        */}
        <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
          <main className="flex-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}