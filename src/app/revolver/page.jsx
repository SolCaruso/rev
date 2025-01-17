import { Container } from '@/components/container'
import { Gradient, GradientBackground } from '@/components/gradient'
import { Heading, Lead, Subheading } from '@/components/text'
import React from 'react'
import LandingLayout from '@/components/LandingLayout'
import '@/styles/tailwind.css' 
import { HeroPattern } from '@/components/HeroPattern'
import Target from "@/components/icons/Target";
import Market from "@/components/icons/Market";
import Bonus from "@/components/icons/Bonus";

export const metadata = {
  title: "Solana’s community Sportsbook & Casino",
  description:
    'Experience the best odds, exclusive casino games, and community-powered rewards with $RVR.',
}


function Header() {
  return (
    <Container className="mt-16 lg:mt-64">
      <Heading as="h1">Solana’s community Sportsbook & Casino</Heading>
      <Lead className="mt-6 max-w-3xl">
      Experience the best odds, exclusive casino games, and community-powered rewards with $RVR.
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
          {/* The main icon on top of each card (Target) */}
          <div className="flex items-center justify-center">
            {icon}
          </div>
          {/* The title goes where the button used to be */}
          <div className="mt-6 text-center text-2xl font-semibold text-gray-950">
            {title}
          </div>

          {/* Bullet items using the new PlusIcon */}
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
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 bottom-0 top-48 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
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
              "Best odds (lowest vig).",
              "Highest limits.",
              "Most generous bonuses."
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


export default function Pricing() {
  

  return (
    <LandingLayout>
      <GradientBackground/>
      <HeroPattern  />
      <Header />
      <PricingCards />
    </LandingLayout>
  )
}
