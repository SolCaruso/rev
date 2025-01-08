import React from 'react'
import LandingLayout from '@/components/LandingLayout'
import BettorsClub from '@/components/BettorsClub'
import SharpShooter from '@/components/SharpShooter'
import '@/styles/tailwind.css' 

export const metadata = {
  title: 'Revolver Bettors Club',
  description: 'Private betting club on Solana; to be a member, you must hold a Revolver Underdawg NFT.',
}

export default function BettorsClubPage() {
  return (
    <LandingLayout>
      <BettorsClub />
      <SharpShooter />
    </LandingLayout>
  )
}