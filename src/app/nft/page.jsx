import React from 'react'
import LandingLayout from '@/components/LandingLayout'
import Nft from '@/components/Nft'
import '@/styles/tailwind.css' 
import { HeroPattern } from '@/components/HeroPattern'

export const metadata = {
  title: 'Revolver Bettors Club',
  description: 'Private betting club on Solana; to be a member, you must hold a Revolver Underdawg NFT.',
}

export default function BettorsClubPage() {
  return (
    <LandingLayout>
      <Nft/>
      <HeroPattern  />
    </LandingLayout>
  )
}