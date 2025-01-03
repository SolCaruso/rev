"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import RightArrowIcon  from "@/components/icons/RightArrow"; 

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 2 }, 
};

/**
 * Single area to define colors:
 * - "green" => ["#698D65", "#A9BBA8"]
 * - "purple" => ["#7446DB", "#9776F0"]
 * - "blue" => ["#488AC9", "#64AEE8"]
 * - "red" => ["#DB2E20", "#F20165"]
 * - "yellow" => ["#F3BC3C", "#FCD263"]
 */
const colorMap = {
  green: ["#698D65", "#A9BBA8"],
  purple: ["#7446DB", "#9776F0"],
  blue: ["#488AC9", "#64AEE8"],
  red: ["#DB2E20", "#F20165"],
  yellow: ["#CB8F05", "#FCD263"],
};

// 38-card array; each card has { color: "green" } or so:
const cards = [
  {
    id: 1,
    image: "/images/dog1.png",
    color: "green",
    game: "Blackjack",
    gameIcon: "Blackjack",
  },
  {
    id: 2,
    image: "/images/dog2.png",
    color: "purple",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 3,
    image: "/images/dog3.png",
    color: "blue",
    game: "Roulette",
    gameIcon: "Roulette",
  },
  {
    id: 4,
    image: "/images/dog4.png",
    color: "red",
    game: "Hockey",
    gameIcon: "Hockey",
  },
  {
    id: 5,
    image: "/images/dog5.png",
    color: "yellow",
    game: "Sic Bo",
    gameIcon: "SicBo",
  },
  {
    id: 6,
    image: "/images/dog6.png",
    color: "purple",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 7,
    image: "/images/dog7.png",
    color: "green",
    game: "MMA",
    gameIcon: "MMA",
  },
  {
    id: 8,
    image: "/images/dog8.png",
    color: "blue",
    game: "Roulette",
    gameIcon: "Roulette",
  },
  {
    id: 9,
    image: "/images/dog9.png",
    color: "purple",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 10,
    image: "/images/dog10.png",
    color: "yellow",
    game: "Poker",
    gameIcon: "TexasHoldEm",
  },
  {
    id: 11,
    image: "/images/dog11.png",
    color: "green",
    game: "Blackjack",
    gameIcon: "Blackjack",
  },
  {
    id: 12,
    image: "/images/dog12.png",
    color: "yellow",
    game: "Craps",
    gameIcon: "Craps",
  },
  {
    id: 13,
    image: "/images/dog13.png",
    color: "blue",
    game: "Dominoes",
    gameIcon: "Dominoes",
  },
  {
    id: 14,
    image: "/images/dog14.png",
    color: "yellow",
    game: "Sic Bo",
    gameIcon: "SicBo",
  },
  {
    id: 15,
    image: "/images/dog15.png",
    color: "red",
    game: "Football",
    gameIcon: "Football",
  },
  {
    id: 16,
    image: "/images/dog16.png",
    color: "green",
    game: "MMA",
    gameIcon: "MMA",
  },
  {
    id: 17,
    image: "/images/dog17.png",
    color: "blue",
    game: "Roulette",
    gameIcon: "Roulette",
  },
  {
    id: 18,
    image: "/images/dog18.png",
    color: "yellow",
    game: "Craps",
    gameIcon: "Craps",
  },
  {
    id: 19,
    image: "/images/dog19.png",
    color: "purple",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 20,
    image: "/images/dog20.png",
    color: "blue",
    game: "Roulette",
    gameIcon: "Roulette",
  },
  {
    id: 21,
    image: "/images/dog21.png",
    color: "red",
    game: "Football",
    gameIcon: "Football",
  },
  {
    id: 22,
    image: "/images/dog22.png",
    color: "purple",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 23,
    image: "/images/dog23.png",
    color: "blue",
    game: "Roulette",
    gameIcon: "Roulette",
  },
  {
    id: 24,
    image: "/images/dog24.png",
    color: "yellow",
    game: "Craps",
    gameIcon: "Craps",
  },
  {
    id: 25,
    image: "/images/dog25.png",
    color: "green",
    game: "Blackjack",
    gameIcon: "Blackjack",
  },
  {
    id: 26,
    image: "/images/dog26.png",
    color: "red",
    game: "Football",
    gameIcon: "Football",
  },
  {
    id: 27,
    image: "/images/dog27.png",
    color: "green",
    game: "Blackjack",
    gameIcon: "Blackjack",
  },
  {
    id: 28,
    image: "/images/dog28.png",
    color: "purple",
    game: "Baseball",
    gameIcon: "Baseball",
  },
  { 
    id: 29,
    image: "/images/dog29.png",
    color: "blue",
    game: "Roulette",
    gameIcon: "Roulette",
  },
  {
    id: 30,
    image: "/images/dog30.png",
    color: "yellow",
    game: "Sic Bo",
    gameIcon: "SicBo",
  },
  {
    id: 31,
    image: "/images/dog31.png",
    color: "purple",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 32,
    image: "/images/dog32.png",
    color: "red",
    game: "Football",
    gameIcon: "Football",
  },
  {
    id: 33,
    image: "/images/dog33.png",
    color: "yellow",
    game: "Craps",
    gameIcon: "Craps",
  },
  {
    id: 34,
    image: "/images/dog34.png",
    color: "blue",
    game: "Soccer",
    gameIcon: "Soccer",
  },
  {
    id: 35,
    image: "/images/dog35.png",
    color: "green",
    game: "Blackjack",
    gameIcon: "Blackjack",
  },
  {
    id: 36,
    image: "/images/dog36.png",
    color: "purple",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 37,
    image: "/images/dog37.png",
    color: "blue",
    game: "Dominoes",
    gameIcon: "Dominoes",
  },
  {
    id: 38,
    image: "/images/dog38.png",
    color: "red",
    game: "Football",
    gameIcon: "Football",
  },
];

export default function CardSection() {
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  // Duplicate array for infinite scrolling
  const combinedCards = [...cards, ...cards];
  const NUM_CARDS = cards.length;

  // Measure container width on resize
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentBoxSize) {
          const width = entry.contentRect.width;
          setContainerWidth(width);
        }
      }
    });
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  function getCardsPerView(width) {
    if (width >= 1024) return 5; // Large
    if (width >= 640) return 3;  // Tablet
    return 2;                    // Mobile
  }

  const cardsPerView = getCardsPerView(containerWidth);
  const GAP_PX = 30;
  const totalGap = GAP_PX * (cardsPerView - 1);

  const cardWidth =
    containerWidth > 0
      ? (containerWidth - totalGap) / cardsPerView
      : 0;

  function handleNext() {
    setIndex((prev) => (prev + 1) % NUM_CARDS);
  }

  function handlePrev() {
    setIndex((prev) => (prev - 1 + NUM_CARDS) % NUM_CARDS);
  }

  // Offset to shift the track
  const xOffset = -index * (cardWidth + GAP_PX);

  return (
    <section className="pb-16 text-white">
      <div className="max-w-5xl lg:max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-xl font-bold">Dawgs only.</h2>
        <p
          className="mt-1 text-xl font-bold text-transparent bg-clip-text max-w-sm"
          style={{
            backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)",
          }}
        >
          Meet the underdawgs, your keys to the most exclusive bettors club on
          Solana.
        </p>
      </div>

      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative mx-auto max-w-[1600px]"
        style={{ overflow: "hidden" }}
      >
        <motion.div
          className="flex"
          style={{ gap: `${GAP_PX}px`, whiteSpace: "nowrap" }}
          animate={{ x: xOffset }}
          transition={{ duration: 0.5 }}
        >
          {combinedCards.map((card, idx) => {
            // Convert card.color -> array of 2 hex codes
            const [topLeft, bottomRight] = colorMap[card.color] || [
              "#ccc",
              "#fff",
            ];

            return (
              <Card
                key={`${card.id}-${idx}`}
                style={{
                  flex: "0 0 auto",
                  width: cardWidth,
                  minWidth: Math.max(0, cardWidth),
                }}
                image={card.image}
                // Provide the 2-hex array as `colors`:
                colors={[topLeft, bottomRight]}
                game={card.game}
                gameIcon={card.gameIcon}
              />
            );
          })}
        </motion.div>
      </div>

      {/* Footer row */}
      <div className="max-w-5xl lg:max-w-7xl mx-auto mt-8 px-4 flex items-center justify-between">
        {/* Turn the "Learn about the benefits" into a button */}

        <Link href="/docs/underdawg#benefits" passHref>
        <motion.div
          className="mt-1 text-base font-bold text-transparent bg-clip-text max-w-sm inline-flex items-center cursor-pointer"
          style={{
            // Same gradient text style as before
            backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)",
          }}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
          Learn <span className="hidden xs-440:block">&nbsp;about the&nbsp;</span>benefits
          {/* Only the arrow moves on button hover */}
          <motion.div className="ml-2" variants={arrowVariants}>
            <RightArrowIcon strokeColor="#4F4F4F" className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </Link>

        {/* The existing left/right arrow buttons */}
        <div className="flex items-center gap-2">
          <button onClick={handlePrev} className="arrowBtn flex items-center gap-2">
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button onClick={handleNext} className="arrowBtn flex items-center gap-2">
            <svg
              width="13"
              height="13"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}