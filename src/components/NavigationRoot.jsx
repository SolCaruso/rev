// NavigationRoot.jsx
"use client"
import Link from "next/link"

export function NavigationRoot() {
  return (
    <nav className="hidden lg:flex w-full justify-center gap-6">
      <DesktopNavLink href="/nft">NFT</DesktopNavLink>
      <DesktopNavLink href="/bettors-club">Bettors Club</DesktopNavLink>
      {/* 
         If you want to point your "Docs" link to /docs:
      */}
      <DesktopNavLink href="/docs">Docs</DesktopNavLink>
    </nav>
  )
}

// Reusable link styles
function DesktopNavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="
        text-sm leading-5
        text-zinc-600 dark:text-zinc-400
        transition
        hover:text-zinc-900 dark:hover:text-white
      "
    >
      {children}
    </Link>
  )
}