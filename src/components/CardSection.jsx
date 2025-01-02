"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";

// 1) Our 38-card array:
const cards = [
  {
    id: 1,
    image: "/images/dog1.png",
    colors: ["green1", "green2"],
    cardIcon: "GreenCardIcon",
    game: "Blackjack",
    gameIcon: "Blackjack",
  },
  {
    id: 2,
    image: "/images/dog2.png",
    colors: ["purple1", "purple2"],
    cardIcon: "PurpleCardIcon",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 3,
    image: "/images/dog3.png",
    colors: ["blue1", "blue2"],
    cardIcon: "BlueCardIcon",
    game: "Roulette",
    gameIcon: "Roulette",
  },
  {
    id: 4,
    image: "/images/dog4.png",
    colors: ["red1", "red2"],
    cardIcon: "RedCardIcon",
    game: "Hockey",
    gameIcon: "Hockey",
  },
  {
    id: 5,
    image: "/images/dog5.png",
    colors: ["yellow1", "yellow2"],
    cardIcon: "YellowCardIcon",
    game: "Sic Bo",
    gameIcon: "SicBo",
  },
  {
    id: 6,
    image: "/images/dog6.png",
    colors: ["purple1", "purple2"],
    cardIcon: "PurpleCardIcon",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 7,
    image: "/images/dog7.png",
    colors: ["green1", "green2"],
    cardIcon: "GreenCardIcon",
    game: "MMA",
    gameIcon: "MMA",
  },
  {
    id: 8,
    image: "/images/dog8.png",
    colors: ["blue1", "blue2"],
    cardIcon: "BlueCardIcon",
    game: "Roulette",
    gameIcon: "Roulette",
  },
  {
    id: 9,
    image: "/images/dog9.png",
    colors: ["purple1", "purple2"],
    cardIcon: "PurpleCardIcon",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 10,
    image: "/images/dog10.png",
    colors: ["yellow1", "yellow2"],
    cardIcon: "YellowCardIcon",
    game: "Texas hold 'em",
    gameIcon: "TexasHoldEm",
  },
  {
    id: 11,
    image: "/images/dog11.png",
    colors: ["green1", "green2"],
    cardIcon: "GreenCardIcon",
    game: "Blackjack",
    gameIcon: "Blackjack",
  },
  {
    id: 12,
    image: "/images/dog12.png",
    colors: ["yellow1", "yellow2"],
    cardIcon: "YellowCardIcon",
    game: "Craps",
    gameIcon: "Craps",
  },
  {
    id: 13,
    image: "/images/dog13.png",
    colors: ["blue1", "blue2"],
    cardIcon: "BlueCardIcon",
    game: "Dominoes",
    gameIcon: "Dominoes",
  },
  {
    id: 14,
    image: "/images/dog14.png",
    colors: ["yellow1", "yellow2"],
    cardIcon: "YellowCardIcon",
    game: "Sic Bo",
    gameIcon: "SicBo",
  },
  {
    id: 15,
    image: "/images/dog15.png",
    colors: ["red1", "red2"],
    cardIcon: "RedCardIcon",
    game: "Poker",
    gameIcon: "Poker",
  },
  {
    id: 16,
    image: "/images/dog16.png",
    colors: ["green1", "green2"],
    cardIcon: "GreenCardIcon",
    game: "MMA",
    gameIcon: "MMA",
  },
  {
    id: 17,
    image: "/images/dog17.png",
    colors: ["blue1", "blue2"],
    cardIcon: "BlueCardIcon",
    game: "Roulette",
    gameIcon: "Roulette",
  },
  {
    id: 18,
    image: "/images/dog18.png",
    colors: ["yellow1", "yellow2"],
    cardIcon: "YellowCardIcon",
    game: "Craps",
    gameIcon: "Craps",
  },
  {
    id: 19,
    image: "/images/dog19.png",
    colors: ["purple1", "purple2"],
    cardIcon: "PurpleCardIcon",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 20,
    image: "/images/dog20.png",
    colors: ["blue1", "blue2"],
    cardIcon: "BlueCardIcon",
    game: "Roulette",
    gameIcon: "Roulette",
  },
  {
    id: 21,
    image: "/images/dog21.png",
    colors: ["red1", "red2"],
    cardIcon: "RedCardIcon",
    game: "Football",
    gameIcon: "Football",
  },
  {
    id: 22,
    image: "/images/dog22.png",
    colors: ["purple1", "purple2"],
    cardIcon: "PurpleCardIcon",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 23,
    image: "/images/dog23.png",
    colors: ["blue1", "blue2"],
    cardIcon: "BlueCardIcon",
    game: "Roulette",
    gameIcon: "Roulette",
  },
  {
    id: 24,
    image: "/images/dog24.png",
    colors: ["yellow1", "yellow2"],
    cardIcon: "YellowCardIcon",
    game: "Craps",
    gameIcon: "Craps",
  },
  {
    id: 25,
    image: "/images/dog25.png",
    colors: ["green1", "green2"],
    cardIcon: "GreenCardIcon",
    game: "Blackjack",
    gameIcon: "Blackjack",
  },
  {
    id: 26,
    image: "/images/dog26.png",
    colors: ["red1", "red2"],
    cardIcon: "RedCardIcon",
    game: "Football",
    gameIcon: "Football",
  },
  {
    id: 27,
    image: "/images/dog27.png",
    colors: ["yellow1", "yellow2"],
    cardIcon: "YellowCardIcon",
    game: "Texas hold 'em",
    gameIcon: "TexasHoldEm",
  },
  {
    id: 28,
    image: "/images/dog28.png",
    colors: ["purple1", "purple2"],
    cardIcon: "PurpleCardIcon",
    game: "Baseball",
    gameIcon: "Baseball",
  },
  {
    id: 29,
    image: "/images/dog29.png",
    colors: ["blue1", "blue2"],
    cardIcon: "BlueCardIcon",
    game: "Roulette",
    gameIcon: "Roulette",
  },
  {
    id: 30,
    image: "/images/dog30.png",
    colors: ["yellow1", "yellow2"],
    cardIcon: "YellowCardIcon",
    game: "Sic Bo",
    gameIcon: "SicBo",
  },
  {
    id: 31,
    image: "/images/dog31.png",
    colors: ["purple1", "purple2"],
    cardIcon: "PurpleCardIcon",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 32,
    image: "/images/dog32.png",
    colors: ["red1", "red2"],
    cardIcon: "RedCardIcon",
    game: "Football",
    gameIcon: "Football",
  },
  {
    id: 33,
    image: "/images/dog33.png",
    colors: ["yellow1", "yellow2"],
    cardIcon: "YellowCardIcon",
    game: "Craps",
    gameIcon: "Craps",
  },
  {
    id: 34,
    image: "/images/dog34.png",
    colors: ["blue1", "blue2"],
    cardIcon: "BlueCardIcon",
    game: "Soccer",
    gameIcon: "Soccer",
  },
  {
    id: 35,
    image: "/images/dog35.png",
    colors: ["yellow1", "yellow2"],
    cardIcon: "YellowCardIcon",
    game: "Texas hold 'em",
    gameIcon: "TexasHoldEm",
  },
  {
    id: 36,
    image: "/images/dog36.png",
    colors: ["purple1", "purple2"],
    cardIcon: "PurpleCardIcon",
    game: "Basketball",
    gameIcon: "Basketball",
  },
  {
    id: 37,
    image: "/images/dog37.png",
    colors: ["blue1", "blue2"],
    cardIcon: "BlueCardIcon",
    game: "Dominoes",
    gameIcon: "Dominoes",
  },
  {
    id: 38,
    image: "/images/dog38.png",
    colors: ["yellow1", "yellow2"],
    cardIcon: "YellowCardIcon",
    game: "Texas hold 'em",
    gameIcon: "TexasHoldEm",
  },
];

export default function CardSection() {
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef(null);

  // 2) Duplicate the array to create an "infinite" loop
  const combinedCards = [...cards, ...cards];
  const NUM_CARDS = cards.length; // 38

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
    if (width >= 1024) return 5; // Large screens
    if (width >= 640) return 3;  // Tablet
    return 2;                    // Mobile
  }

  const cardsPerView = getCardsPerView(containerWidth);

  const GAP_PX = 30; // Gap between cards
  const totalGap = GAP_PX * (cardsPerView - 1);

  // Each card's width
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

  // Offset so that the "index" card is left-aligned
  const xOffset = -index * (cardWidth + GAP_PX);

  return (
    <section className="pb-16 text-white">
      {/* Heading/Paragraph */}
      <div className="max-w-2xl lg:max-w-5xl mx-auto px-4 mb-16">
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
        style={{
          overflow: "hidden",
        }}
      >
        <motion.div
          className="flex"
          style={{
            gap: `${GAP_PX}px`,
            whiteSpace: "nowrap",
          }}
          animate={{ x: xOffset }}
          transition={{ duration: 0.5 }}
        >
          {combinedCards.map((card, idx) => (
            <Card
              key={`${card.id}-${idx}`}
              style={{
                flex: "0 0 auto",
                width: cardWidth,
                minWidth: Math.max(0, cardWidth),
              }}
              image={card.image}
              colors={card.colors}
              cardIcon={card.cardIcon}
              game={card.game}
              gameIcon={card.gameIcon}
            />
          ))}
        </motion.div>
      </div>

      {/* Footer row */}
      <div className="max-w-2xl lg:max-w-5xl mx-auto mt-8 px-4 flex items-center justify-between">
        <div
          className="mt-1 text-base font-bold text-transparent bg-clip-text max-w-sm"
          style={{
            backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)",
          }}
        >
          Learn about the benefits &rarr;
        </div>
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