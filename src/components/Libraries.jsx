import { Heading } from '@/components/Heading'
import SignUpIcon from '@/components/icons/SignUp.jsx'
import BestOddsIcon from '@/components/icons/BestOdds.jsx'
import HighestIcon from '@/components/icons/Highest.jsx'
import PropIcon from '@/components/icons/Prop.jsx'
import CommunityIcon from '@/components/icons/CommunityDriven.jsx'

const libraries = [
  { name: 'No sign-up', description: 'No sign-up needed, just connect your Solana wallet and play.', logo: SignUpIcon },
  { name: 'Best odds', description: 'Play with the lowest vig on Revolver!', logo: BestOddsIcon },
  { name: 'Highest betting limits', description: 'Bet large amounts of $RVR, even on niche markets.', logo: HighestIcon },
  { name: 'Prop markets', description: 'Solana, crypto-focused, and other fun prop markets.', logo: PropIcon },
  { name: 'Community-driven', description: 'All $RVR house revenue is burned or recycled to the project treasury.', logo: CommunityIcon },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none relative">
      {/* Global gradient definition with objectBoundingBox */}
      <svg className="absolute w-0 h-0">
        <defs>
          <linearGradient id="av" x1="0.5" y1="0" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stopColor="#db2e20" />
            <stop offset="1" stopColor="#f20165" />
          </linearGradient>
        </defs>
      </svg>

      <Heading level={2} id="official-libraries">Key Features</Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-white/5 pt-10 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-white">{library.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{library.description}</p>
            </div>
            <library.logo className="w-12 h-12 flex-shrink-0" fill="url(#av)" />
          </div>
        ))}
      </div>
    </div>
  )
}