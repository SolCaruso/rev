"use client";
import React from "react";

// Icons
import AirdropIcon from "@/components/icons/Airdrop";
import CommunityIcon from "@/components/icons/Community";
import TargetIcon from "@/components/icons/Target";
import Link from "next/link";
import { motion } from "framer-motion";
import DocsIcon from "@/components/icons/Docs";

export default function BettorsClub() {
  return (
    <section className="px-4 py-8 md:pt-14 lg:max-w-[1200px] lg:pt-32 mx-auto">
      {/* Bettors Club Card */}
      <div
        className="
          relative 
          mt-16
          md:mt-2
          p-2 
          rounded-2xl
          bg-gradient-to-br from-[#352b2c] via-[#110818] to-[#45223e]
          border border-[#3a3a3a]
          mx-auto 
          flex 
          max-w-2xl 
          flex-col 
          gap-8 
          mb-32 
          lg:max-w-full 
          lg:flex-row 
          lg:gap-20
        "
        style={{
          boxShadow: `
            0 0 40px 20px rgba(255, 255, 255, 0.03), 
            inset 0 0.5px 0 rgba(255, 255, 255, 0.3)
          `,
        }}
      >
        {/* Inner container for Bettors Club */}
        <div
          className="
            relative 
            w-full
            h-full
            p-6
            rounded-xl
            border border-[hsla(0,0%,100%,0.08)] 
            bg-gradient-to-b from-black via-[#131313] to-[#0c0c0c] 
            backdrop-blur-md 
            shadow-xl
            flex flex-col lg:flex-row
            gap-8
            text-gray-100
          "
        >
          {/* Left: Cowboy image */}
          <div
            className="
              flex w-full justify-center 
              overflow-hidden rounded-xl 
              bg-gradient-to-b from-[#db2e20] to-[#f20165] border border-[#3a3a3a]
              lg:w-96
            "
          >
            <img
              className="xs:max-w-96"
              src="/images/cowboy.webp"
              alt="Cowboy underdog"
            />
          </div>

          {/* Right: Club info */}
          <div className="flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left">
            <h2 className="text-3xl font-bold">Revolver Bettors Club</h2>
            <p className="text-lg">
              Underdog NFT holders get access to the Revolver Bettors Club,
              including the following benefits:
            </p>

            {/* Bullet Points */}
            <ul className="flex flex-col sm:flex-row gap-6 py-4 text-base font-medium">
              <div>
                <li className="mb-2 flex items-center gap-2">
                  <span className="text-green-400">✔</span>
                  $RVR token
                </li>
                <li className="mb-2 flex items-center gap-2">
                  <span className="text-green-400">✔</span>
                  Sharp picks
                </li>
              </div>
              <div>
                <li className="mb-2 flex items-center gap-2">
                  <span className="text-green-400">✔</span>
                  Revolver.ag Sportsbook &amp; Casino
                </li>
                <li className="mb-2 flex items-center gap-2">
                  <span className="text-green-400">✔</span>
                  Sports betting community
                </li>
              </div>
            </ul>

            {/* Join Discord Button */}
            <Link href="/docs" passHref>
            <motion.div
              className="
                inline-flex 
                items-center 
                justify-center
                gap-2
                min-h-[36px]
                px-3.5 py-1.5
                text-[14px] 
                font-medium 
                leading-[16px]
                tracking-[0.2px]
                whitespace-nowrap
                cursor-pointer
                border-none
                rounded-md
                transition-colors
                duration-200
                ease-in-out
                bg-[#E6E6E6]
                hover:bg-[#FFF]
                shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
                opacity-90
                hover:opacity-100
                text-black
              "
            >
              <DocsIcon className="sm:w-4 h-4" />
              <span>Learn more</span>
            </motion.div>
          </Link>
          </div>
        </div>
      </div>

      <h1 className="mt-4 text-lg font-semibold text-center sm:text-xl">
        Bettors Club Perks
      </h1>
      <p
        className="text-xl font-semibold text-transparent bg-clip-text text-center mb-12"
        style={{
          backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)",
        }}
      >
        Unlock exclusive rewards & winning advantages.
      </p>

      <div
        className="
          mx-auto 
          flex 
          max-w-2xl 
          flex-col 
          gap-5 
          lg:max-w-full 
          lg:flex-row
          mb-20
          md:mb-0
        "
      >
        {/* Perk 1 */}
        <div
          className="
            relative 
            p-2 
            rounded-2xl
            bg-gradient-to-br from-[#1a1819] via-[#110818] to-[#222122]
            border border-[#3a3a3a]
            w-full
            lg:w-1/3
          "
          style={{
            boxShadow: `
              0 0 40px 20px rgba(255, 255, 255, 0.03), 
              inset 0 0.5px 0 rgba(255, 255, 255, 0.3)
            `,
          }}
        >
          <div
            className="
              relative 
              w-full
              h-full
              p-6
              rounded-xl
              border border-[hsla(0,0%,100%,0.08)] 
              bg-gradient-to-b from-black via-[#131313] to-[#0c0c0c] 
              backdrop-blur-md 
              shadow-xl
              flex flex-col items-center gap-4
              text-center
            "
          >
            <AirdropIcon className="w-16 h-16 flex-shrink-0 sm:w-20 sm:h-20" />
            <h5 className="text-xl font-bold text-gray-200">Underdog NFT</h5>
            <p className="text-sm text-gray-300">
              Receive airdrops and staking rewards for the $RVR token.
              Play with $RVR on the Revolver.ag sportsbook and casino.
            </p>
          </div>
        </div>

        {/* Perk 2 */}
        <div
          className="
            relative 
            p-2 
            rounded-2xl
            bg-gradient-to-br from-[#1a1819] via-[#110818] to-[#222122]
            border border-[#3a3a3a]
            w-full
            lg:w-1/3
          "
          style={{
            boxShadow: `
              0 0 40px 20px rgba(255, 255, 255, 0.03), 
              inset 0 0.5px 0 rgba(255, 255, 255, 0.3)
            `,
          }}
        >
          <div
            className="
              relative 
              w-full
              h-full
              p-6
              rounded-xl
              border border-[hsla(0,0%,100%,0.08)] 
              bg-gradient-to-b from-black via-[#131313] to-[#0c0c0c] 
              backdrop-blur-md 
              shadow-xl
              flex flex-col items-center gap-4
              text-center
            "
          >
            <TargetIcon className="w-16 h-16 flex-shrink-0 sm:w-20 sm:h-20"/>
            <h5 className="text-xl font-bold text-gray-200">Sharp picks</h5>
            <p className="text-sm text-gray-300">
              Get profitable plays from our Sharpshooter Aggregator,
              combining 50+ historically profitable handicappers for
              high-value picks.
            </p>
          </div>
        </div>

        {/* Perk 3 */}
        <div
          className="
            relative 
            p-2 
            rounded-2xl
            bg-gradient-to-br from-[#1a1819] via-[#110818] to-[#222122]
            border border-[#3a3a3a]
            w-full
            lg:w-1/3
          "
          style={{
            boxShadow: `
              0 0 40px 20px rgba(255, 255, 255, 0.03), 
              inset 0 0.5px 0 rgba(255, 255, 255, 0.3)
            `,
          }}
        >
          <div
            className="
              relative 
              w-full
              h-full
              p-6
              rounded-xl
              border border-[hsla(0,0%,100%,0.08)] 
              bg-gradient-to-b from-black via-[#131313] to-[#0c0c0c] 
              backdrop-blur-md 
              shadow-xl
              flex flex-col items-center gap-4
              text-center
            "
          >
            <CommunityIcon className="w-16 h-16 flex-shrink-0 sm:w-20 sm:h-20"/>
            <h5 className="text-xl font-bold text-gray-200">Revolver.ag</h5>
            <p className="text-sm text-gray-300">
              Play with $RVR. Enjoy the best odds and highest limits.
              House revenue is burned or redistributed to the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}