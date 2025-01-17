import React from "react";
import { Container } from '@/components/container';
import { Heading, Lead, Subheading } from '@/components/text';
import Mint from "@/components/icons/Mint";
import Supply from "@/components/icons/Supply";
import Server from "@/components/icons/Server";
import NFT from "@/components/icons/Nft";
import Traits from "@/components/icons/Traits";
import Dog from "@/components/icons/Dog";

export default function Nft() {
  return (
    <>
      {/* Increase top spacing on mobile, reduce on md+ */}
      <Container className="mt-16 sm:mt-32 2xl:mt-48 pb-24">
        <Heading as="h1" className="text-white">
          The Underdawgs.
        </Heading>
        <Lead className="mt-6 max-w-2xl">
          Unlock exclusive betting perks, sharp picks, and rare collectibles with the Underdawg NFT.
        </Lead>

        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          {/* Left Column: Underdog / Bettors Club / Traits */}
          <div className="max-w-lg flex flex-col gap-12">
            
            {/* Underdog NFT (smaller on mobile) */}
            <div className="flex items-center gap-8 min-h-[4rem]">
              <NFT className="w-10 h-10 flex-shrink-0 sm:w-16 sm:h-16" />
              <div className="flex-1">
                <h2 className="text-lg font-medium tracking-tight sm:text-2xl">
                  Underdog NFT
                </h2>
                <p className="mt-1 text-sm font-semibold text-gray-400 sm:text-lg">
                  Grants access to the Revolver.ag Bettors Club.
                </p>
              </div>
            </div>

            {/* Bettors Club (smaller on mobile) */}
            <div className="flex items-center gap-8 min-h-[4rem]">
              <Dog className="w-10 h-10 flex-shrink-0 sm:w-16 sm:h-16" />
              <div className="flex-1">
                <h2 className="text-lg font-medium tracking-tight sm:text-2xl">
                  Bettors Club
                </h2>
                <p className="mt-1 text-sm font-semibold text-gray-400 sm:text-lg">
                  Receive sharp picks from the Sharpshooter™️ profitable handicapper aggregator,
                  plus play on the Revolver.ag native sportsbook with $RVR.
                </p>
              </div>
            </div>

            {/* Traits (smaller on mobile) */}
            <div className="flex items-center gap-8 min-h-[4rem]">
              <Traits className="w-10 h-10 flex-shrink-0 sm:w-16 sm:h-16" />
              <div className="flex-1">
                <h2 className="text-lg font-medium tracking-tight sm:text-2xl">
                  Traits
                </h2>
                <p className="mt-1 text-sm font-semibold text-gray-400 sm:text-lg">
                  Over 170 traits, including 10+ 1-of-1s.
                </p>
              </div>
            </div>
          </div>

          {/* Images (spans 2 rows on lg) */}
          <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src="/images/nft/nft1.jpg"
                  className="block w-full h-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                <img
                  alt=""
                  src="/images/nft/nft2.jpg"
                  className="block w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src="/images/nft/nft3.jpg"
                  className="block w-full h-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                <img
                  alt=""
                  src="/images/nft/nft4.jpg"
                  className="block w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* NFT Info (single-line, smaller) */}
          <div className="max-lg:mt-16 lg:col-span-1">
            <Subheading>NFT Info</Subheading>
            <hr className="mt-6 border-t border-gray-500" />
            {/* Single-line layout with overflow */}
            <dl className="mt-6 flex flex-row items-center gap-8 overflow-x-auto flex-wrap">
              {/* Mint Date */}
              <div className="flex items-center gap-2">
                <Mint className="w-8 h-8 sm:w-12 sm:h-12" />
                <div className="flex flex-col">
                  <dd className="order-first text-base font-medium tracking-tight sm:text-xl">
                    Mint Date
                  </dd>
                  <dt className="text-sm text-gray-400 sm:text-base">
                    TBD
                  </dt>
                </div>
              </div>

              {/* Supply */}
              <div className="flex items-center gap-4">
                <Supply className="w-8 h-8 sm:w-12 sm:h-12" />
                <div className="flex flex-col">
                  <dd className="order-first text-base font-medium tracking-tight sm:text-xl">
                    Supply
                  </dd>
                  <dt className="text-sm text-gray-400 sm:text-base">
                    TBD
                  </dt>
                </div>
              </div>

              {/* Whitelist Open */}
              <div className="flex items-center gap-2">
                <Server className="w-8 h-8 sm:w-12 sm:h-12" />
                <div className="flex flex-col">
                  <dd className="order-first text-base font-medium tracking-tight sm:text-xl">
                    Whitelist Open
                  </dd>
                  <a
                    href="https://discord.gg/revolver-ag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-[#e71744] text-gray-400"
                  >
                    discord.gg/revolver-ag
                  </a>
                </div>
              </div>
            </dl>
          </div>
        </section>
      </Container>
    </>
  );
}