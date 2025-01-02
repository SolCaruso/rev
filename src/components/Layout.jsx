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
  let pathname = usePathname()
  let isDocs = pathname.startsWith('/docs')
  let docSections = isDocs ? allSections[pathname] ?? [] : []

  // Grab doc sections only if it's a doc route
  let sections = isDocs ? allSections[pathname] ?? [] : []

  return (
    <SectionProvider sections={docSections}>
      <div className="h-full">
        {isDocs ? (
          /* ---------- DOC ROUTE => pinned sidebar + doc header ---------- */
          <motion.header
            layoutScroll
            className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
          >
            <div
              className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto
                         lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-3.5 xl:w-80
                         lg:dark:border-white/10"
            >
              {/* Desktop doc logo (top-left) */}
              <div className="hidden lg:flex">
                <Link href="/" aria-label="Home">
                  <Logo className="h-7" />
                </Link>
              </div>

              {/* The doc-specific header with search, doc nav items, etc. */}
              <Header />
              {/* Pinned doc nav for desktop */}
              <Navigation className="hidden lg:mt-10 lg:block" />
            </div>
          </motion.header>
        ) : (
          /* ---------- NON-DOC ROUTE => no pinned sidebar ---------- */
          <Header />
        )}

        {/* Main content area: shift right only for doc routes */}
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