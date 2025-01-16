import React from "react";
import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import Mint from "@/components/icons/Mint";

export default function Nft() {
    return (
      <Container className="mt-32">
        <Heading as="h1" className="text-white">The Underdawgs.</Heading>
        <Lead className="mt-6 max-w-3xl">
          We’re on a mission to transform revenue organizations by harnessing vast
          amounts of illegally acquired customer data.
        </Lead>
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-lg">
            <h2 className="text-2xl font-medium tracking-tight">Underdog NFT</h2>
            <p className="mt-2 text-base text-gray-400">
            Grants access to the Revolver.ag Bettors Club.
            </p>
            <h2 className="text-2xl font-medium tracking-tight mt-6">Bettors Club</h2>
            <p className="mt-2 text-base text-gray-400">
            Receive sharp picks from the Sharpshooter™️ profitable handicapper aggregator, plus play on the Revolver.ag native sportsbook with $RVR.
            </p>
            <h2 className="text-2xl font-medium tracking-tight mt-6">Traits
            </h2>
            <p className="mt-2 text-base text-gray-400">
            Over 170 traits, including 10+ 1-of-1s.
            </p>
           
          </div>
          <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src="/images/nft/nft1.jpg"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                <img
                  alt=""
                  src="/images/nft/nft2.jpg"
                  className="block size-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src="/images/nft/nft3.jpg"
                  className="block size-full object-cover"
                />
              </div>
              <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                <img
                  alt=""
                  src="/images/nft/nft4.jpg"
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="max-lg:mt-16 lg:col-span-1">
            <Subheading>The Numbers</Subheading>
            <hr className="mt-6 border-t border-gray-200" />
            <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div className="flex flex-row gap-4 border-b border-dotted border-gray-200 pb-4 items-center">
                <Mint />
                <div className="flex flex-col">
                  <dt className="text-base text-gray-400">TBD</dt>
                  <dd className="order-first text-2xl font-medium tracking-tight">
                  Mint Date
                  </dd>
                </div>

              </div>
              <div className="flex flex-row gap-4 border-b border-dotted border-gray-200 pb-4 items-center">
                <Mint />
                <div className="flex flex-col">
                  <dt className="text-base text-gray-400">TBD</dt>
                  <dd className="order-first text-2xl font-medium tracking-tight">
                  Supply
                  </dd>
                </div>

              </div>
              <div className="flex flex-row gap-4 border-b border-dotted border-gray-200 pb-4 items-center">
                <Mint />
                <div className="flex flex-col">
                  <dt className="text-base text-gray-400">discord.gg/revolver</dt>
                  <dd className="order-first text-2xl font-medium tracking-tight">
                  Whitelist Open
                  </dd>
                </div>

              </div>

              
            </dl>
          </div>
        </section>
      </Container>
    )
  }