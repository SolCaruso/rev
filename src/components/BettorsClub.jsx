"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Carousel from "@/components/Carousel";

// Updated testimonial data
const testimonialData = [
  {
    // 1) AI Picks
    groupTitle: "AI Picks",
    groupSubtitle: "Our Edge",
    firstRowTitle: "Consensus",
    firstRowIcon: "👥",
    firstRowToken: "Experts",
    firstRowText: "Combines top cappers’ plays for consistent, profitable picks.",
    secondRowTitle: "Scoring",
    secondRowIcon: "📊",
    secondRowToken: "Market",
    secondRowText: "Uses conflict data, historical stats, and market to refine accuracy.",
    bigQuoteHtml: `Sharpshooter only looks at plays and data from the Revolver Handicapper Index, which contains <span class="text-white">only cappers with long-term profit</span>.`,
  },
  {
    // 2) Win Potential
    groupTitle: "Win Potential",
    groupSubtitle: "Long Term",
    firstRowTitle: "Profit",
    firstRowIcon: "📈",
    firstRowToken: "500+Units",
    firstRowText: "Cappers netted over 500 units in 2024, showcasing strong performance.",
    secondRowTitle: "Variance",
    secondRowIcon: "⚖️",
    secondRowToken: "Streaks",
    secondRowText: "Big winning streaks and tough losses are part of gambling reality.",
    bigQuoteHtml: `Handicappers included in scope combined for over 500 units profit in 2024 tailing their picks with $100 betting units <span class="text-white">would have resulted in over $50,000 profit!</span>`,
  },
  {
    // 3) Pick Access
    groupTitle: "Pick Access",
    groupSubtitle: "Members Only",
    firstRowTitle: "Discord",
    firstRowIcon: "🎯",
    firstRowToken: "Portal",
    firstRowText: "Exclusive picks are revealed to members only in private server channels.",
    secondRowTitle: "Paid",
    secondRowIcon: "💰",
    secondRowToken: "Free",
    secondRowText: "Both paid and free cappers’ selections feed Sharpshooter’s profitable analysis.",
    bigQuoteHtml: `<span class="text-white">Sharpshooter’s scope</span> includes handicappers that provide free picks and handicappers that provide paid picks.`,
  },
  {
    // 4) NFT Club
    groupTitle: "NFT Club",
    groupSubtitle: "Private Access",
    firstRowTitle: "Underdawg",
    firstRowIcon: "🐶",
    firstRowToken: "Asset",
    firstRowText: "Each NFT grants membership, offering picks, airdrops, and community benefits.",
    secondRowTitle: "Tradable",
    secondRowIcon: "🔄",
    secondRowToken: "Perks",
    secondRowText: "Ownership can be sold anytime, unlike traditional private betting clubs.",
    bigQuoteHtml: `A tradable membership card Revolver Underdawg NFT, if you ever want to move on, your membership can be <span class="text-white">sold to someone else</span>.`,
  },
  {
    // 5) Token Airdrop
    groupTitle: "Token Airdrop",
    groupSubtitle: "Community Gains",
    firstRowTitle: "RVR",
    firstRowIcon: "🪙",
    firstRowToken: "Token",
    firstRowText: "Members receive eligibility for the $RVR token airdrop and initiatives.",
    secondRowTitle: "Casino",
    secondRowIcon: "🎲",
    secondRowToken: "Fun",
    secondRowText: "Future experiments include a community sportsbook and casino on Solana.",
    bigQuoteHtml: `Eligibility for airdrop of the $RVR token…such as the Revolver Community<span class="text-white"> Sportsbook and Casino</span>.`,
  },
];

export default function BettorsClub() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Page Heading */}
      <div className="max-w-5xl lg:max-w-7xl mx-auto pt-20 md:pt-28 text-center items-center flex flex-col">
        <h2 className="text-base font-semibold text-center sm:text-xl">
          Revolver Bettors Club Perks
        </h2>
        <p
          className="text-base sm:text-xl font-semibold text-transparent bg-clip-text max-w-md"
          style={{
            backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)",
          }}
        >
          The most exclusive bettors club on Solana.
        </p>
      </div>

      {/* Carousel */}
      <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

      {/* Testimonial Section */}
      <section
        className="px-4 mt-10"
        style={{
          maxWidth: "1064px",
          background:
            "radial-gradient(49.41% 64.58% at 49.4% 0%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
          borderTop: "1px solid",
          borderImageSource:
            "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.19) 30%,rgba(255,255,255,0.19) 70%,transparent)",
          borderImageSlice: 1,
          margin: "0 auto",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, backgroundColor: "rgba(0,0,0,1)" }}
            animate={{ opacity: 1, backgroundColor: "rgba(0,0,0,0)" }}
            exit={{ opacity: 0, backgroundColor: "rgba(0,0,0,1)" }}
            transition={{ duration: 0.3 }}
          >

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start pt-8 md:pt-24">
              {/* Left 2x2 Grid (Title/Token combos) */}
              <div>
                <div
                  className="
                    grid
                    grid-cols-1
                    gap-y-8
                    md:grid-cols-[auto_1fr]
                    md:grid-rows-2
                    md:gap-x-4
                  "
                >
                  {/* First Row Title */}
                  <p
                    className="
                      text-sm 
                      text-gray-400 
                      font-medium 
                      font-mono 
                      tracking-wide
                      mb-0
                      md:row-start-1 
                      md:col-start-1
                    "
                  >
                    {testimonialData[activeIndex].firstRowTitle}
                  </p>

                  {/* First Row Icon/Token/Text */}
                  <div
                    className="
                      flex 
                      flex-col 
                      items-start 
       
                      md:row-start-1 
                      md:col-start-2
                    "
                  >
                    <span className="inline-flex items-center gap-1 py-[.8px] px-1.5 text-sm font-medium text-white bg-white/5 rounded-md mb-2">
                      <span>{testimonialData[activeIndex].firstRowIcon}</span>
                      {testimonialData[activeIndex].firstRowToken}
                    </span>
                    <p className="text-sm text-gray-300">
                      {testimonialData[activeIndex].firstRowText}
                    </p>
                  </div>

                  {/* Second Row Title */}
                  <p
                    className="
                      text-sm 
                      text-gray-400 
                      font-medium 
                      font-mono 
                      tracking-wide 
                      md:row-start-2 
                      md:col-start-1
                      mt-4
                      md:mt-0
                    "
                  >
                    {testimonialData[activeIndex].secondRowTitle}
                  </p>

                  {/* Second Row Icon/Token/Text */}
                  <div
                    className="
                      flex 
                      flex-col 
                      items-start
                      md:row-start-2 
                      md:col-start-2
                      mt-2
                      md:mt-0
                    "
                  >
                    <span className="inline-flex items-center gap-1 py-[.8px] px-1.5 text-sm font-medium text-white bg-white/5 rounded-md mb-2">
                      <span>{testimonialData[activeIndex].secondRowIcon}</span>
                      {testimonialData[activeIndex].secondRowToken}
                    </span>
                    <p className="text-sm text-gray-300">
                      {testimonialData[activeIndex].secondRowText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="w-[1.5px] bg-gray-900 h-full my-auto md:mx-4 rounded-full" />

              {/* Quote */}
              <div className="flex items-center justify-center md:justify-start self-center">
                <blockquote className="relative leading-relaxed max-w-xl text-left">
                  <p
                    style={{ color: "#6A6B6C" }}
                    className="
                      relative
                      text-base
                      sm:text-lg
                      md:text-xl
                      font-medium
                      mb-2
                      leading-relaxed
                      before:font-serif
                      after:font-serif
                      before:content-['“']
                      after:content-['”']
                      before:absolute
                      after:absolute
                      before:text-4xl
                      sm:before:text-5xl
                      after:text-4xl
                      sm:after:text-5xl
                      before:text-gray-800
                      after:text-gray-800
                      before:-top-6
                      before:-left-6
                      after:-bottom-6
                      after:-right-6
                    "
                    dangerouslySetInnerHTML={{
                      __html: testimonialData[activeIndex].bigQuoteHtml,
                    }}
                  />
                </blockquote>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
}