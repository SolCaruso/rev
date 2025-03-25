'use client'

import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { UsersIcon } from '@/components/icons/UsersIcon'

/**
 * 1) Adjusted paths to /docs/...
 */
const resources = [
  {
    href: '/docs/sharpshooter',
    name: 'Sharpshooter AI Agent',
    description:
      'Reviews picks and analyses from experts across various sports (the Revolver Handicapper Index), and provide weighted picks to Bettors Club members.',
    icon: UserIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/docs/sportsbook',
    name: 'Revolver Sportsbook & Casino',
    description:
      "Revolver's Community-centered Sportsbook & Casino, fully focused on providing a fun and fair experience to $RVR holders and Bettors Club members.",
    icon: ChatBubbleIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/docs/underdawg',
    name: 'Underdawg NFT',
    description:
      'The Revolver Underdawg NFT collection is a generative, hand-drawn NFT collection on Solana. Provides access to the Revolver Bettors Club and entitlement to the $RVR Airdrop.',
    icon: EnvelopeIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/docs/token',
    name: '$RVR Token',
    description:
      "$RVR aims to enable fun and experimental initiatives for members, such as the Revolver Community Sportsbook and Casino.",
    icon: UsersIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
]

function ResourceIcon({ icon: Icon }) {
  return (
    <div
      className="
        flex h-7 w-7 items-center justify-center 
        rounded-full bg-white/7.5 ring-white/15 
        backdrop-blur-[2px] transition duration-300
        group-hover:bg-[#FF494D]/10 group-hover:ring-[#FF494D]/50
      "
    >
      <Icon
        className="
          h-5 w-5 fill-white/10 stroke-zinc-400 transition-colors duration-300 
          group-hover:fill-[#FF494D]/10 group-hover:stroke-[#FF494D]
        "
      />
    </div>
  )
}

function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      {/* Faint pattern behind */}
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="
            absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] 
            fill-white/1 stroke-white/2.5
          "
          {...gridProps}
        />
      </div>

      <motion.div
        className="
          absolute inset-0 rounded-2xl 
          bg-gradient-to-r from-[#E71744]/10 to-[#FF494D]/10 
          opacity-0 transition duration-300 group-hover:opacity-100
        "
        style={style}
      />
      <motion.div
        className="
          absolute inset-0 rounded-2xl 
          opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100
        "
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="
            absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] 
            fill-white/2.5 stroke-white/10
          "
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Resource({ resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-white/2.5 transition-shadow hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div
        className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20"
      />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <ResourceIcon icon={resource.icon} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-400">
          {resource.description}
        </p>
      </div>
    </div>
  )
}

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="resources">
        Resources
      </Heading>
      <div
        className="
          not-prose mt-4 grid grid-cols-1 gap-8 
          border-t border-white/5 pt-10 
          sm:grid-cols-2 xl:grid-cols-4
        "
      >
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}