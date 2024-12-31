import { forwardRef } from "react"
import Link from "next/link"
import clsx from "clsx"
import { motion, useScroll, useTransform } from "framer-motion"
import { usePathname } from "next/navigation"

import { Button } from "@/components/Button"
import { Logo } from "@/components/Logo"
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from "@/components/MobileNavigation"
import { useMobileNavigationStore } from "@/components/MobileNavigation"
import { MobileSearch, Search } from "@/components/Search"
import { ThemeToggle } from "@/components/ThemeToggle"

function TopLevelNavItem({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef(function Header({ className, ...props }, ref) {
  const pathname = usePathname()
  const isDocs = pathname.startsWith("/docs") // doc or not

  const { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  const isInsideMobileNavigation = useIsInsideMobileNavigation()

  const { scrollY } = useScroll()
  const bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  const bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      {...props}
      ref={ref}
      className={clsx(
        className,
        "fixed inset-x-0 top-0 z-50 flex h-14 items-center gap-12 px-4 transition sm:px-6",
        // If doc route + not in mobile nav, shift pinned offset
        isDocs && !isInsideMobileNavigation && "lg:left-72 xl:left-80 backdrop-blur-sm dark:backdrop-blur",
        // Otherwise, if mobile nav or not doc, just apply the base BG
        isInsideMobileNavigation
          ? "bg-white dark:bg-zinc-900"
          : "bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]",
      )}
      style={{
        "--bg-opacity-light": bgOpacityLight,
        "--bg-opacity-dark": bgOpacityDark,
      }}
    >
      {/* Thin bottom border under the header bar */}
      <div
        className={clsx(
          "absolute inset-x-0 top-full h-px transition",
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            "bg-zinc-900/7.5 dark:bg-white/7.5",
        )}
      />

      {/* 
        1) Show doc search bar if in doc route 
        2) Otherwise skip 
      */}
      {isDocs && <Search />}

      {/* Mobile left side: hamburger + mobile logo */}
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="h-6" variant="mobile" />
        </Link>
      </div>

      {/* 
        Desktop row for non-doc routes:
        We'll create a 3-column approach:
        Left = Desktop logo
        Center = Nav items
        Right = theme + sign-in
      */}
      {!isDocs && (
        <div className="hidden lg:flex w-full items-center">
          {/* Left: Desktop logo */}
          <Link href="/" aria-label="Home" className="mr-4">
            <Logo className="h-6" variant="desktop" />
          </Link>
          {/* Center: nav items (mx-auto) */}
          <nav className="mx-auto">
            <ul role="list" className="flex items-center gap-8">
              <TopLevelNavItem href="#">NFT</TopLevelNavItem>
              <TopLevelNavItem href="#">Bettors Club</TopLevelNavItem>
              <TopLevelNavItem href="/docs">Docs</TopLevelNavItem>
            </ul>
          </nav>
          {/* Right: theme toggle + sign in */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button href="#">Sign in</Button>
          </div>
        </div>
      )}

      {/* 
        Right side for doc routes:
        (doc top-level nav, mobile doc search, theme toggle, sign in)
      */}
      {isDocs && (
        <div className="ml-auto flex items-center gap-5">
          <nav className="hidden md:block">
            <ul role="list" className="flex items-center gap-8">
              <TopLevelNavItem href="#">NFT</TopLevelNavItem>
              <TopLevelNavItem href="#">Bettors Club</TopLevelNavItem>
              <TopLevelNavItem href="/docs">Docs</TopLevelNavItem>
            </ul>
          </nav>
          <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
          <div className="flex gap-4">
            <MobileSearch />
            <ThemeToggle />
          </div>
          <div className="hidden xs-440:contents">
            <Button href="#">Sign in</Button>
          </div>
        </div>
      )}
    </motion.div>
  )
})