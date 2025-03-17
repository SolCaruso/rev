'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import { Logo } from '@/components/Logo'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
  useMobileNavigationStore,
} from '@/components/MobileNavigation'
import { MobileSearch, Search } from '@/components/Search'
import SportsButton from '@/components/SportsButton'

function TopLevelNavItem({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm leading-5 text-zinc-400 transition hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef(function Header({ className, ...props }, ref) {
  const pathname = usePathname()
  const isDocs = pathname.startsWith('/docs')

  // Pull `close` from the store so we can attach it to the logo link
  const { isOpen: mobileNavIsOpen, close } = useMobileNavigationStore()
  const isInsideMobileNavigation = useIsInsideMobileNavigation()

  return (
    <motion.div
      {...props}
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center gap-12 px-4 transition sm:px-6',
        isDocs && !isInsideMobileNavigation && 'lg:left-72 xl:left-80',
        'backdrop-blur-lg bg-black/50'
      )}
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            (isDocs ? 'bg-white/7.5' : 'bg-transparent')
        )}
      />

      {isDocs && <Search />}

      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        {/* Attach `onClick` to close the nav */}
        <Link href="/" aria-label="Home" onClick={close}>
          <Logo className="h-7" variant="mobile" />
        </Link>
      </div>

      {!isDocs && (
        <div className="flex w-full items-center">
          <Link href="/" aria-label="Home" className="mr-4 hidden lg:block">
            <Logo className="h-7" variant="desktop" />
          </Link>
          <nav className="mx-auto">
            <ul className="hidden lg:flex items-center gap-8 absolute top-4 left-1/2 transform -translate-x-1/2 font-semibold">
              <TopLevelNavItem href="/nft">NFT</TopLevelNavItem>
              <TopLevelNavItem href="/bettors-club">Bettors Club</TopLevelNavItem>
              <TopLevelNavItem href="/revolver">Revolver.ag</TopLevelNavItem>
              <TopLevelNavItem href="/docs">Docs</TopLevelNavItem>
            </ul>
          </nav>
          <div className="flex items-center gap-5">
            <div className="hidden xs-440:block">
              <SportsButton href="/coming">Sportsbook</SportsButton>
            </div>
          </div>
        </div>
      )}

      {isDocs && (
        <div className="ml-auto flex items-center gap-5">
          <nav className="hidden md:block">
            <ul role="list" className="flex items-center gap-8">
              <TopLevelNavItem href="/nft">NFT</TopLevelNavItem>
              <TopLevelNavItem href="/bettors-club">Bettors Club</TopLevelNavItem>
              <TopLevelNavItem href="/revolver">Revolver.ag</TopLevelNavItem>
              <TopLevelNavItem href="/docs">Docs</TopLevelNavItem>
            </ul>
          </nav>
          <div className="hidden md:block md:h-5 md:w-px md:bg-white/15" />
          <div className="flex gap-4">
            <MobileSearch />
          </div>
          <div className="hidden xs-440:contents">
            <SportsButton href="/coming">Sportsbook</SportsButton>
          </div>
        </div>
      )}
    </motion.div>
  )
})