"use client"

import { forwardRef } from "react"
import Link from "next/link"
import clsx from "clsx"
import { motion, useScroll, useTransform } from "framer-motion"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/Logo"
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from "@/components/MobileNavigation"
import { useMobileNavigationStore } from "@/components/MobileNavigation"
import { MobileSearch, Search } from "@/components/Search"
import { ThemeToggle } from "@/components/ThemeToggle"
import SportsButton from "@/components/SportsButton";

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
  const isDocs = pathname.startsWith("/docs")

  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()


  return (
    <motion.div
      {...props}
      ref={ref}
      className={clsx(
        className,
        "fixed inset-x-0 top-0 z-50 flex h-14 items-center gap-12 px-4 transition sm:px-6",
        // If doc route + not inside mobile nav => pinned offset + blur
        isDocs && !isInsideMobileNavigation && "lg:left-72 xl:left-80 backdrop-blur-sm dark:backdrop-blur-lg dark:bg-black/50",
        // Otherwise, normal BG
        isInsideMobileNavigation
          ? "bg-white dark:bg-black"
          : "bg-white/[var(--bg-opacity-light)]",
      )}
    >
      {/* Thin border under the header */}
      <div
        className={clsx(
          "absolute inset-x-0 top-full h-px transition",
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
          (isDocs
            ? "bg-zinc-900/7.5 dark:bg-white/7.5"
            : "bg-transparent"
            )
        )}
      />

      {/* 
        If doc route, show doc search bar
        If not doc, skip search
      */}
      {isDocs && <Search />}

      {/* Mobile: hamburger + logo, same for doc or non-doc */}
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="h-7" variant="mobile" />
        </Link>
      </div>

      {/* 
        Non-doc desktop row:
        Left = Desktop logo
        Center = nav links
        Right = sign-in + theme toggle
      */}
      {!isDocs && (
        <div className="flex w-full items-center">
          {/* Left: desktop logo */}
          <Link href="/" aria-label="Home" className="mr-4 hidden lg:block">
            <Logo className="h-7" variant="desktop" />
          </Link>

          {/* Center: your landing links (NFT, Bettors, Docs, etc.) */}
          <nav className="mx-auto">
            <ul className="md:flex items-center gap-8 hidden absolute top-4 left-1/2 transform -translate-x-1/2 font-semibold">
              <TopLevelNavItem href="#">NFT</TopLevelNavItem>
              <TopLevelNavItem href="#">Bettors Club</TopLevelNavItem>
              <TopLevelNavItem href="/docs">Docs</TopLevelNavItem>
            </ul>
          </nav>

          {/* Right side: theme toggle + sign in */}
          <div className="flex items-center gap-5">
            {/* <ThemeToggle /> */}
            <div className="hidden xs-440:block">
              <SportsButton  href="#">Sportsbook</SportsButton>
            </div>
            
          </div>
        </div>
      )}

      {/* 
        Doc route => doc nav on the right side:
        doc top-level nav, mobile search, theme toggle, sign in
      */}
      {isDocs && (
        <div className="ml-auto flex items-center gap-5">
          <nav className="hidden md:block">
            <ul role="list" className="flex items-center gap-8">
              <TopLevelNavItem href="#" >NFT</TopLevelNavItem>
              <TopLevelNavItem href="#">Bettors Club</TopLevelNavItem>
              <TopLevelNavItem href="/docs">Docs</TopLevelNavItem>
            </ul>
          </nav>
          <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
          <div className="flex gap-4">
            <MobileSearch />
            {/* <ThemeToggle /> */}
          </div>
          <div className="hidden xs-440:contents">
            <SportsButton href="#">Sportsbook</SportsButton>
          </div>
        </div>
      )}
    </motion.div>
  )
})