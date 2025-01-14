"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import RightArrow from "@/components/icons/RightArrow"; // Adjust path if needed

export default function SharpShooter() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-full pt-8 md:pt-24 pb-24 px-4 text-white lg:max-w-[1200px] mx-auto">
      {/* -------------- AI Stroke Row -------------- */}
      <div className="relative mt-4 pb-8 flex items-center justify-center">
        {/* Left gradient stroke */}
        <svg
          className="w-48 h-1 sm:w-64"
          viewBox="0 0 272 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1L271.5 1" stroke="url(#rightGradient)" />
          <defs>
            <linearGradient
              id="rightGradient"
              x1="271.5"
              y1="1.00169"
              x2="0"
              y2="0.501689"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ECA5A7" />
              <stop offset="0.165137" stopColor="#581D27" />
              <stop offset="1" stopColor="#190E14" />
            </linearGradient>
          </defs>
        </svg>

        {/* “AI” text in the middle */}
        <span className="text-sm font-medium text-red-400 tracking-wide px-4">
          AI
        </span>

        {/* Right gradient stroke */}
        <svg
          className="w-48 h-1 sm:w-64"
          viewBox="0 0 272 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1L271.5 1" stroke="url(#leftGradient)" />
          <defs>
            <linearGradient
              id="leftGradient"
              x1="-0.500003"
              y1="0.501689"
              x2="271.5"
              y2="1.00169"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ECA5A7" />
              <stop offset="0.165137" stopColor="#581D27" />
              <stop offset="1" stopColor="#190E14" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* -------------- Headline -------------- */}
      <h1 className="mt-4 text-lg font-semibold text-center sm:text-xl">
        Sharpshooter AI Agent
      </h1>
      <p
        className="text-xl font-semibold text-transparent bg-clip-text max-w-sm"
        style={{
          backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)",
        }}
      >
        Your Betting Companion.
      </p>

      {/* -------------- Main “window” area -------------- */}
      <motion.div
        className="relative mt-14 w-full lg:max-w-full mb-24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => (window.location.href = "/docs/sharpshooter")}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        style={{ cursor: "pointer" }}
      >
        {/* Outer frame container */}
        <div
          className="relative p-2 rounded-2xl bg-gradient-to-br from-[#d32e3b] via-[#110818] to-[#45223e] border border-[#3a3a3a]"
          style={{
            boxShadow: `
              0 0 40px 20px rgba(255, 255, 255, 0.03),
              inset 0 0.5px 0 rgba(255, 255, 255, 0.3)
            `,
          }}
        >
          {/* Inner frame */}
          <div className="relative mx-auto w-full p-6 rounded-xl border border-[hsla(0,0%,100%,0.08)] bg-gradient-to-b from-black via-[#131313] to-[#0c0c0c] backdrop-blur-md shadow-xl">
            {/* Big radial gradient shape in the background */}
            <div className="absolute -top-40 -right-24 w-[700px] h-[700px] bg-red-600/50 rounded-full blur-[140px] pointer-events-none opacity-70" />

            {/* Floating note (like in the frame design) */}
            <div className="absolute top-4 left-4 flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="12"
                viewBox="0 0 48 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#ED5656" />
                <circle cx="24" cy="6" r="6" fill="#353749" />
                <circle cx="42" cy="6" r="6" fill="#353749" />
              </svg>
            </div>

            {/* Content area */}
            <div className="flex flex-col sm:flex-row relative z-10 gap-6">
              {/* Sidebar with profile image */}
              <div className="flex flex-col w-36 sm:w-48 md:w-52 text-gray-200 sm:p-3 mt-6 flex-shrink-0 self-center">
                <img
                  src="/images/wildhart-pfp.webp"
                  alt="user"
                  className="w-full rounded-full border border-slate-200/5 bg-slate-600/5 backdrop-blur-3xl self-center"
                />
              </div>

              {/* Main content area */}
              <div className="self-center pt-6">
                <h3 className="mb-2 sm:text-left mt-4 text-lg font-semibold text-center sm:text-xl font-mono">
                  Lily Wildhart
                </h3>
                <p className="text-sm pb-8 font-mono text-center sm:text-left text-gray-400">
                  Lily compiles expert picks in the Revolver Handicapper Index
                  and shares profitable ones with Bettors Club members
                  <span className="md:inline hidden">
                    , along with a score reflecting consensus, historical
                    strengths, and market data.
                  </span>
                  <span className="md:hidden">.</span>
                </p>
              </div>
            </div>

            {/* Action bar: “More about Lily” + arrow */}
            <div className="flex items-center justify-end w-full mt-2 space-x-2">
              <p className="text-sm font-semibold text-gray-400">
                More about Lily
              </p>

              {/* Right arrow slides to the right on hover */}
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <RightArrow className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}