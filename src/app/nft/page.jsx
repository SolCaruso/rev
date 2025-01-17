import React from 'react'
import LandingLayout from '@/components/LandingLayout'
import Nft from '@/components/Nft'
import '@/styles/tailwind.css' 
import { HeroPattern } from '@/components/HeroPattern'

export const metadata = {
  title: 'The Underdawgs NFT',
  description: 'Unlock exclusive betting perks, sharp picks, and rare collectibles with the Underdawg NFT.',
}

export default function BettorsClubPage() {
  return (
    <LandingLayout>
      <Nft/>
      <HeroPattern  />
    </LandingLayout>
  )
}