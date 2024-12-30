"use client"
import Link from "next/link"
import { MobileNavigation } from "@/components/MobileNavigation"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/Button"
import { Logo } from "@/components/Logo"
import { NavigationRoot } from "@/components/NavigationRoot"

export function HeaderRoot() {
  return (
    <header className="flex items-center justify-between px-4 py-3">
      {/* Left side: Mobile hamburger + logo */}
      <div className="flex items-center gap-4 lg:gap-6">
        <div className="lg:hidden">
          <MobileNavigation />
        </div>
        <Link href="/" aria-label="Home">
          <Logo variant="desktop" className="h-6" />
        </Link>
      </div>

      {/* Center: Your new desktop nav */}
      <NavigationRoot />

      {/* Right side: theme toggle + sign-in */}
      <div className="flex items-center gap-4 whitespace-nowrap">
        <ThemeToggle />
        <Button href="#" variant="filled">
          Sign in
        </Button>
      </div>
    </header>
  )
}