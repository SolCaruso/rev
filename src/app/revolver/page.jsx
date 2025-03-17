import { Container } from '@/components/container';
import { Gradient } from '@/components/gradient';
import { Lead } from '@/components/text';
import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import '@/styles/tailwind.css'; 
import { HeroPattern } from '@/components/HeroPattern';
import Target from "@/components/icons/Target";
import Market from "@/components/icons/Market";
import Bonus from "@/components/icons/Bonus";
import Image from "next/image";
import screenshot from '@/images/jpg/screenshot.jpg';

export const metadata = {
  title: "Solana’s community Sportsbook & Casino",
  description:
    'Experience the best odds, exclusive casino games, and community-powered rewards with $RVR.',
}

function Header() {
  return (
    <Container className="mt-16 md:mt-32 3xl:mt-64">
      <h1 as="h1" className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white max-w-3xl">
        Solana’s Community Sportsbook & Casino
      </h1>
      <Lead className="mt-6 max-w-3xl">
        Play on Solana's Community-based Sportsbook & Casino, focused on providing a fun, fair, non-exploitative player experience.
      </Lead>
    </Container>
  )
}

// Each bullet item now has the PlusIcon
function FeatureItem({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm font-medium text-gray-700">
      <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      <span>{children}</span>
    </li>
  )
}

function PricingCard({ icon, title, bullets }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          {/* The main icon on top of each card */}
          <div className="flex items-center justify-center">
            {icon}
          </div>
          {/* The title */}
          <div className="mt-6 text-center text-2xl font-semibold text-gray-950">
            {title}
          </div>
          {/* Bullet items */}
          <div className="mt-8">
            <ul className="space-y-3">
              {bullets.map((bullet, i) => (
                <FeatureItem key={i}>{bullet}</FeatureItem>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24 mb-12 md:mb-32 lg:py-32">
      <Gradient className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1st Card */}
          <PricingCard
            icon={<Target className="h-14 w-14 text-gray-950" />}
            title="Play with $RVR"
            bullets={[
              "All wagers and casino games use the $RVR token.",
              "House revenue is burned or redistributed to the community."
            ]}
          />

          {/* 2nd Card */}
          <PricingCard
            icon={<Market className="h-14 w-14 text-gray-950" />}
            title="Markets"
            bullets={[
              "Place bets on special Solana markets.",
              "Thousands of sports markets, live markets, and esports."
            ]}
          />

          {/* 3rd Card */}
          <PricingCard
            icon={<Bonus className="h-14 w-14 text-gray-950" />}
            title="Best everything"
            bullets={[
              "Best odds/lowest vig.",
              "Highest limits, and no player-based limits for winners.",
              "Generous bonuses and player rewards."
            ]}
          />

          {/* 4th Card */}
          <PricingCard
            icon={<SocialIcon className="h-14 w-14" />}
            title="Easy Sign-up and Social Features"
            bullets={[
              "No registration required; just connect your wallet and play.",
              "No KYC; enjoy frictionless deposits and withdrawals.",
              "Leaderboards with rewards focused on rewarding, not punishing, sharp play."
            ]}
          />
        </div>
      </Container>
    </div>
  )
}

function PlusIcon(props) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

// New SocialIcon for the 4th bubble with gradient fill
function SocialIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="av" x1="29" y1="0" x2="29" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#db2e20" />
          <stop offset="1" stopColor="#f20165" />
        </linearGradient>
      </defs>
      <path
        d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm8 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5zM8 13c-2.33 0-7 1.17-7 3.5V18h7v-1.5c0-2.33 4.67-3.5 7-3.5H8z"
        fill="url(#av)"
      />
    </svg>
  )
}

function Screenshot() {
  return (
    <div className="flex justify-center mb-44">
      <Image
        src={screenshot}
        alt="Screenshot of the Revolver website"
        width={1280}
        height={720}
        className="rounded-3xl shadow-2xl ring-1 ring-black/5"
      />
    </div>
  )
}

export default function Pricing() {
  return (
    <LandingLayout>
      <HeroPattern />
      <Header />
      <PricingCards />
      <Screenshot />
    </LandingLayout>
  )
}