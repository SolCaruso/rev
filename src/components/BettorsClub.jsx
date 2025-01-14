"use client";
import React from "react";

// Icons
import AirdropIcon from "@/components/icons/Airdrop";
import CommunityIcon from "@/components/icons/Community";
import TargetIcon from "@/components/icons/Target";

export default function BettorsClub() {
  return (
    <section className="px-4 py-8 md:pt-14 lg:max-w-[1200px] lg:pt-32 mx-auto">
      {/* Bettors Club Card */}
      <div
        className="
          mx-auto 
          flex max-w-2xl flex-col gap-8 
          rounded-xl border border-gray-800 
          bg-[#0e0e0e] p-4 text-gray-100
          lg:mb-32 lg:max-w-full lg:flex-row lg:gap-20
        "
      >
        {/* Left: Cowboy image (background behind image = #FF6E6D) */}
        <div
          className="
            flex w-full justify-center 
            overflow-hidden rounded-xl 
            bg-[#FF6E6D] 
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
          <a
            className="
              inline-block w-full 
              rounded-full border-2 border-red-500 
              px-16 py-3 text-base font-bold text-red-500 
              hover:bg-red-500 hover:text-white 
              lg:w-auto
            "
            href="https://discord.gg/revolver-ag"
          >
            Join Discord
          </a>
        </div>
      </div>

      {/* Club Perks */}
      <div className="text-center text-white mb-5">
        <h4 className="py-2 text-4xl font-bold">Club Perks</h4>
      </div>

      <div
        className="
          mx-auto 
          flex max-w-2xl flex-col gap-5 
          lg:max-w-full lg:flex-row
        "
      >
        {/* Perk 1 */}
        <div
          className="
            flex w-full lg:w-1/3 flex-col items-center justify-center gap-4 
            rounded-xl border border-gray-800 
            bg-[#0e0e0e] px-4 py-8 text-center  
            text-gray-100
          "
        >
          <div className="h-10 w-10 mb-8 self-center align-middle justify-center items-center">
            <AirdropIcon className="self-center" />
          </div>
          <h5 className="text-xl font-bold">Underdog NFT</h5>
          <p className="text-sm text-gray-300">
            Receive airdrops and staking rewards for the $RVR token. 
            Play with $RVR on the Revolver.ag sportsbook and casino.
          </p>
        </div>

        {/* Perk 2 */}
        <div
          className="
            flex w-full lg:w-1/3 flex-col items-center justify-start gap-4 
            rounded-xl border border-gray-800 
            bg-[#0e0e0e] px-4 py-8 text-center 
            text-gray-100
          "
        >
          <div className="h-10 w-10 mb-4 ">
            <TargetIcon />
          </div>
          <h5 className="text-xl font-bold">Sharp picks</h5>
          <p className="text-sm text-gray-300">
            Get profitable plays from our Sharpshooter Aggregator, 
            combining 50+ historically profitable handicappers for 
            high-value picks.
          </p>
        </div>

        {/* Perk 3 */}
        <div
          className="
            flex w-full lg:w-1/3 flex-col items-center justify-start gap-4 
            rounded-xl border border-gray-800 
            bg-[#0e0e0e] px-4 py-8 text-center 
            text-gray-100
          "
        >
          <div className="h-10 w-10 mb-4">
            <CommunityIcon />
          </div>
          <h5 className="text-xl font-bold">Revolver.ag</h5>
          <p className="text-sm text-gray-300">
            Play with $RVR. Enjoy the best odds and highest limits. 
            House revenue is burned or redistributed to the community.
          </p>
        </div>
      </div>
    </section>
  );
}