"use client";

import * as motion from "motion/react-client";
import { Cursor } from "motion-cursor";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

export default function BettorsClub() {
  const [tooltip, setTooltip] = useState<string | null>(null);

  return (
    <div className="relative flex flex-col items-center w-full min-h-screen py-12 px-4 text-white">
      {/* -------------- AI Stroke Row -------------- */}
      <div className="relative mt-12 flex items-center justify-center">
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
      <h1 className="mt-6 text-2xl font-semibold text-center sm:text-3xl">
        Sharpshooter AI Agent
      </h1>
      <p className="mt-1 text-base text-gray-400 sm:text-lg">
        Your AI Betting Companion
      </p>

      {/* -------------- Main “window” area -------------- */}
      <div className="relative mt-12 w-full max-w-4xl mb-24">
        {/* Outer frame container */}
        <div
          className="relative p-2 rounded-2xl bg-gradient-to-br from-[#d32e3b] via-[#110818] to-[#45223e] border border-[#3a3a3a]"
          style={{
            boxShadow: `
            0 0 40px 20px rgba(255, 255, 255, 0.03),
            inset 0 0.5px 0 rgba(255, 255, 255, 0.3)`,
          }}
        >
          {/* Inner frame */}
          <div className="relative mx-auto w-full p-6 rounded-xl border border-[hsla(0,0%,100%,0.08)] bg-gradient-to-b from-black via-[#131313] to-[#0c0c0c] backdrop-blur-md shadow-xl">
            {/* Big radial gradient shape in the background */}
            <div
              className="absolute -top-40 -right-24 w-[700px] h-[700px] bg-red-600/50 rounded-full blur-[140px] pointer-events-none opacity-70"
            />

            {/* Content area */}
            <div className="flex flex-col sm:flex-row relative z-10 gap-6">
              {/* Sidebar with profile image */}
              <div
                className="flex flex-col w-48 md:w-56 text-gray-200 p-3 mt-6 flex-shrink-0 self-center"
                onMouseEnter={() => setTooltip("Wildhart")}
                onMouseLeave={() => setTooltip(null)}
              >
                <img
                  src="/images/wildhart-pfp.webp"
                  alt="user"
                  className="w-full rounded-full border border-[#212121] bg-slate-600/5 backdrop-blur-3xl"
                />
              </div>

              {/* Cursor */}
              <AnimatePresence>
                {tooltip && (
                  <Cursor
                    follow
                    offset={{ x: 20, y: 20 }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      padding: "0.5rem 1rem",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      background: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                      color: "#000",
                      pointerEvents: "none",
                    }}
                  >
                    {tooltip}
                  </Cursor>
                )}
              </AnimatePresence>

              {/* Main content area */}
              <div className="self-center">
                <h3 className="font-bold text-lg mb-2">
                  What is the difference between useEffect and useLayoutEffect?
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  The main difference between useEffect and useLayoutEffect in
                  React is the timing at which they are fired.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------- TESTIMONIALS SECTION -------------- */}
      <section
        className=" mx-auto px-4"
        // Inline style to replicate that radial BG + border gradient
        style={{
          maxWidth: "1064px",
          background:
            "radial-gradient(49.41% 64.58% at 49.4% 0%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
          borderTop: "1px solid",
          borderImageSource:
            "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.19) 30%,rgba(255,255,255,0.19) 70%,transparent)",
          borderImageSlice: 1,
          padding: "var(--spacing-6) 0 0", // or tailwind style of your choice
          margin: "0 auto",
        }}
      >
        {/* Title Above the Cards (centered) */}
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold pt-24 pb-2 text-gray-200">
            Built for professionals like you.
          </h2>
          <p className="text-gray-400 mt-1">Used by seriously productive people.</p>
        </div>
      </section>
    </div>
  );
}