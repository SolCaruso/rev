import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import logoGo from '@/images/logos/go.svg'
import logoNode from '@/images/logos/node.svg'
import logoPhp from '@/images/logos/php.svg'
import logoPython from '@/images/logos/python.svg'
import logoRuby from '@/images/logos/ruby.svg'

const libraries = [
  {
    href: '#',
    name: 'No sign-up',
    description:
      'No sign-up needed, just connect your Solana wallet and play. ',
    logo: logoPhp,
  },
  {
    href: '#',
    name: 'Best odds',
    description:
      'Play with the lowest vig on Revolver! ',
    logo: logoRuby,
  },
  {
    href: '#',
    name: 'Highest betting limits',
    description:
      'Bet large amounts of $RVR, even on niche markets.',
    logo: logoNode,
  },
  {
    href: '#',
    name: 'Prop markets',
    description:
      'Solana, crypto-focused, and other fun prop markets (with more added at user request!)',
    logo: logoPython,
  },
  {
    href: '#',
    name: 'Community-driven',
    description:
      'A portion of house revenue is burned, while the remaining returns to the project treasury.',
    logo: logoGo,
  },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Key Features
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3 dark:border-white/5">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  )
}
