import React from "react";
import Image from "next/image";

import { Container } from "@/components/container";
import { Heading, Lead, Subheading } from "@/components/text";
import Mint from "@/components/icons/Mint";
import Supply from "@/components/icons/Supply";
import Server from "@/components/icons/Server";
import NFT from "@/components/icons/Nft";
import Traits from "@/components/icons/Traits";
import Dog from "@/components/icons/Dog";

// Import your new images
import dog39 from "@/images/png/NFT1.png";
import dog40 from "@/images/png/NFT2.png";
import dog41 from "@/images/png/NFT3.png";
import dog42 from "@/images/png/NFT4.png";

export default function Nft() {
  return (
    <>
      {/* Increase top spacing on mobile, reduce on md+ */}
      <Container className="mt-16 sm:mt-32 2xl:mt-42 pb-24 relative">
        <Heading as="h1" className="text-white">
          Meet the Underdawgs.
        </Heading>
        <Lead className="mt-6 max-w-2xl">
          Your keys to the most exclusive bettors club on Solana.
        </Lead>

        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 z-10">
          {/* Left Column: Underdog / Bettors Club / Traits */}
          <div className="max-w-lg flex flex-col gap-12">
            {/* Underdog NFT (smaller on mobile) */}
            <div className="flex items-center gap-8 min-h-[4rem]">
              <NFT className="w-10 h-10 flex-shrink-0 sm:w-16 sm:h-16" />
              <div className="flex-1">
                <h2 className="text-lg font-medium tracking-tight sm:text-2xl text-white">
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
                <h2 className="text-lg font-medium tracking-tight sm:text-2xl text-white">
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
                <h2 className="text-lg font-medium tracking-tight sm:text-2xl text-white">
                  Traits
                </h2>
                <p className="mt-1 text-sm font-semibold text-gray-400 sm:text-lg">
                  Over 170 traits, including 10+ 1-of-1s.
                </p>
              </div>
            </div>
          </div>

          {/* Images (spans 2 rows on lg) */}
          <div className="pt-20 lg:pt-0 lg:row-span-2 lg:-mr-16 xl:mr-auto z-10">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              {/* Image 1 */}
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl border border-white/10">
                <Image
                  alt=""
                  src={dog39}
                  width={600}
                  height={600}
                  className="block w-full h-full object-cover"
                  priority
                  style={{
                    backgroundImage: "linear-gradient(to right, #488AC9, #64AEE8)",
                  }}
                />
              </div>

              {/* Image 2 */}
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl border border-white/10 lg:-mt-32">
                <Image
                  alt=""
                  src={dog40}
                  width={600}
                  height={600}
                  className="block w-full h-full object-cover"
                  style={{
                    backgroundImage: "linear-gradient(to right, #7446DB, #9776F0)",
                  }}
                />
              </div>

              {/* Image 3 */}
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl  border border-white/10">
                <Image
                  alt=""
                  src={dog41}
                  width={600}
                  height={600}
                  className="block w-full h-full object-cover"
                  style={{
                    backgroundImage: "linear-gradient(to right, #DB2E20, #F20165)",
                  }}
                />
              </div>

              {/* Image 4 */}
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl  border border-white/10 lg:-mt-32">
                <Image
                  alt=""
                  src={dog42}
                  width={600}
                  height={600}
                  className="block w-full h-full object-cover"
                  style={{
                    backgroundImage: "linear-gradient(to right, #698D65, #A9BBA8)",
                  }}
                />
              </div>
            </div>
        </div>

          {/* NFT Info (single-line, smaller) */}
          <div className="max-lg:mt-16 lg:col-span-1 z-10">
            <Subheading>NFT Info</Subheading>
            <hr className="mt-6 border-t border-gray-500" />
            {/* Single-line layout with overflow */}
            <dl className="mt-6 flex flex-row items-center gap-8 overflow-x-auto flex-wrap">
              {/* Mint Date */}
              <div className="flex items-center gap-2">
                <Mint className="w-8 h-8 sm:w-12 sm:h-12" />
                <div className="flex flex-col">
                  <dd className="order-first text-base font-medium tracking-tight sm:text-xl text-white">
                    Mint Date
                  </dd>
                  <dt className="text-sm text-gray-400 sm:text-base">TBD</dt>
                </div>
              </div>

              {/* Supply */}
              <div className="flex items-center gap-4">
                <Supply className="w-8 h-8 sm:w-12 sm:h-12" />
                <div className="flex flex-col">
                  <dd className="order-first text-base font-medium tracking-tight sm:text-xl text-white">
                    Supply
                  </dd>
                  <dt className="text-sm text-gray-400 sm:text-base">TBD</dt>
                </div>
              </div>

              {/* Whitelist Open */}
              <div className="flex items-center gap-2">
                <Server className="w-8 h-8 sm:w-12 sm:h-12" />
                <div className="flex flex-col">
                  <dd className="order-first text-base font-medium tracking-tight sm:text-xl text-white">
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