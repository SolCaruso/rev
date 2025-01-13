"use client";

import React, { useState } from "react";
// Import AnimatePresence and motion from framer-motion
import { AnimatePresence, motion } from "framer-motion";

import Carousel from "@/components/Carousel";

// Sample testimonial data
const testimonialData = [
  {
    // This object corresponds to team[0]
    firstRowTitle: "Pro Benefits:",
    firstRowToken: "RVR Token",
    firstRowText:
      "Image Modification on your fingertips. Trust me, you will love it.",

    secondRowTitle: "Pro Benefits:",
    secondRowToken: "RVR Token",
    secondRowText:
      "Image Modification on your fingertips. Trust me, you will love it.",

    bigQuote: "Simply replaces so many tools at once.",
  },
  {
    // This corresponds to team[1]
    firstRowTitle: "Pro Benefits for Member 2:",
    firstRowToken: "Some Different Perk",
    firstRowText: "Another kind of testimonial for second member.",
    secondRowTitle: "Another Title for Member 2:",
    secondRowToken: "RVR Token",
    secondRowText: "Completely unique second row text for #2.",
    bigQuote: "A second big quote for item 2.",
  },
  {
    // This corresponds to team[2]
    firstRowTitle: "Pro Benefits for Member 3:",
    firstRowToken: "RVR Token",
    firstRowText: "Powerful modification features. Enjoy them!",
    secondRowTitle: "Member 3's Additional Info:",
    secondRowToken: "VIP Access",
    secondRowText: "Even more interesting stuff for #3.",
    bigQuote: "Third big quote—amazing functionality!",
  },
  {
    // This corresponds to team[3]
    firstRowTitle: "Member 4 Title",
    firstRowToken: "Exclusive Perk",
    firstRowText: "Testimonial text for #4",
    secondRowTitle: "Member 4 Additional Title",
    secondRowToken: "VIP Access again!",
    secondRowText: "Another mention. Great synergy.",
    bigQuote: "Fourth big quote to highlight something.",
  },
  {
    // This corresponds to team[4]
    firstRowTitle: "Member 5 Title",
    firstRowToken: "RVR Token or something else",
    firstRowText: "Testimonial text for #5",
    secondRowTitle: "Extra Info for #5",
    secondRowToken: "VIPish Access",
    secondRowText: "All sorts of fancy stuff here for #5.",
    bigQuote: "Fifth big quote—fantastic for the final item!",
  },
];

export default function BettorsClub() {
  // Move activeIndex state to the parent
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Page Heading */}
      <div className="max-w-5xl lg:max-w-7xl mx-auto pt-40 text-center items-center flex flex-col ">
        <h2 className="text-lg font-semibold text-center sm:text-xl">
          Revolver Bettors Club Perks
        </h2>
        <p
          className="text-xl font-semibold text-transparent bg-clip-text max-w-md"
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
        className="px-4"
        style={{
          maxWidth: "1064px",
          background:
            "radial-gradient(49.41% 64.58% at 49.4% 0%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
          borderTop: "1px solid",
          borderImageSource:
            "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.19) 30%,rgba(255,255,255,0.19) 70%,transparent)",
          borderImageSlice: 1,
          padding: "var(--spacing-6) 0 0",
          margin: "0 auto",
        }}
      >
        <AnimatePresence mode="wait">
          {/* Important: the key must change when activeIndex changes */}
          <motion.div
            key={activeIndex}
            /**
             * Instead of going from "#000" to "transparent",
             * we use RGBA to avoid the warning:
             */
            initial={{ opacity: 0, backgroundColor: "rgba(0,0,0,1)" }}
            animate={{ opacity: 1, backgroundColor: "rgba(0,0,0,0)" }}
            exit={{ opacity: 0, backgroundColor: "rgba(0,0,0,1)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr] items-start pt-28">
              {/* Left: “Top Extension” & “Favorite Feature” */}
              <div className="flex flex-col gap-16">
                {/* First Row */}
                <div className="flex gap-8">
                  <p className="text-sm text-gray-400 font-medium font-mono tracking-wide mb-2 flex-shrink-0 py-1">
                    {testimonialData[activeIndex].firstRowTitle}
                  </p>
                  <div className="items-center mb-2 ">
                    <span className="inline-flex items-center gap-1 py-[.8px] px-1.5 text-sm font-medium text-white bg-white/5 rounded-md mb-4">
                      <span className="pr-.5">💲</span>{" "}
                      {testimonialData[activeIndex].firstRowToken}
                    </span>
                    <p className="text-sm text-gray-300">
                      {testimonialData[activeIndex].firstRowText}
                    </p>
                  </div>
                </div>

                {/* Second Row */}
                <div className="flex gap-8">
                  <p className="text-sm text-gray-400 font-medium font-mono tracking-wide mb-2 flex-shrink-0 py-1">
                    {testimonialData[activeIndex].secondRowTitle}
                  </p>
                  <div className="items-center mb-2 ">
                    <span className="inline-flex items-center gap-1 py-[.8px] px-1.5 text-sm font-medium text-white bg-white/5 rounded-md mb-4">
                      <span className="pr-.5">💲</span>{" "}
                      {testimonialData[activeIndex].secondRowToken}
                    </span>
                    <p className="text-sm text-gray-300">
                      {testimonialData[activeIndex].secondRowText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider (vertical on desktop, horizontal on mobile) */}
              <div className="w-[1.5px] bg-gray-900 h-full my-auto md:mx-8 rounded-full" />

              {/* Right: Big Quote */}
              <div className="flex items-center justify-center md:justify-start md:align-middle self-center">
                <blockquote className="relative text-gray-300 max-w-xl text-center md:text-left leading-relaxed">
                  <p
                    className="
                      relative 
                      text-lg 
                      sm:text-xl 
                      font-medium 
                      mb-2 
                      leading-relaxed
                      before:font-serif
                      after:font-serif
                      before:content-['“'] 
                      after:content-['”'] 
                      before:absolute 
                      after:absolute 
                      before:text-5xl 
                      after:text-5xl 
                      before:text-gray-800 
                      after:text-gray-800 
                      before:-top-6 
                      before:-left-6 
                      after:-bottom-6 
                      after:-right-6
                    "
                  >
                    {testimonialData[activeIndex].bigQuote}
                  </p>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
}