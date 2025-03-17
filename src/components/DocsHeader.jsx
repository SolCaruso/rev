'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Logo } from '@/components/Logo'
import { Header as BaseHeader } from '@/components/Header'
import { Navigation } from '@/components/Navigation'

export function DocsHeader() {
  return (
    <motion.header
      layoutScroll
      className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
    >
      <div
        className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto
                   lg:border-r lg:border-white/10 lg:px-6 lg:pb-8 lg:pt-3.5 xl:w-80"
      >
        {/* Desktop doc logo (top-left) */}
        <div className="hidden lg:flex">
          <Link href="/" aria-label="Home">
            <Logo className="h-7" />
          </Link>
        </div>
        {/* Docs-specific header & navigation */}
        <BaseHeader />
        <Navigation className="hidden lg:mt-10 lg:block" />
      </div>
    </motion.header>
  )
}