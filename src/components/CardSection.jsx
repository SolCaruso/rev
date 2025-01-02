"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@/components/Card";

// Example data. Replace with your real 20 cards if desired.
const cardData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: `Card #${i + 1}`,
}));

export default function CardSection() {
  const [index, setIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const containerRef = useRef(null);

  // Combine the data array twice for an "infinite" scrolling effect
  const combinedCards = [...cardData, ...cardData];
  const NUM_CARDS = cardData.length; // The actual number of unique cards

  // --- 1) Measure container width on resize ---
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

  // --- 2) Cards per view based on container width ---
  // Cap out at 5 for large screens so we never see more than 5 cards at once
  function getCardsPerView(width) {
    if (width >= 1024) return 5;  // Large screens
    if (width >= 640) return 3;   // Tablet
    return 2;                     // Mobile
  }
  
  const cardsPerView = getCardsPerView(containerWidth);

  // --- 3) Card sizing + gap calculation ---
  const GAP_PX = 30; // Gap between cards (16px = Tailwind's gap-4)
  const totalGap = GAP_PX * (cardsPerView - 1);

  // Each card gets this width:
  const cardWidth =
    containerWidth > 0
      ? (containerWidth - totalGap) / cardsPerView
      : 0;

  // --- 4) Move exactly 1 card per click (plus gap). "Infinite" logic. ---
  function handleNext() {
    // Move forward by 1 card
    // Because we have duplicates in combinedCards, we can safely
    // loop from 0..(NUM_CARDS-1) repeatedly.
    setIndex((prev) => (prev + 1) % NUM_CARDS);
  }

  function handlePrev() {
    // Move backward by 1 card
    setIndex((prev) => (prev - 1 + NUM_CARDS) % NUM_CARDS);
  }

  // The horizontal offset in px
  // We shift by -index * (cardWidth + GAP_PX) so the active "slide" is left-aligned
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
          // Limit width so we never stretch too far.
          // NOTE: If you want an exact width so no partial card is ever visible,
          // ensure it matches your "cardsPerView" * cardWidth + totalGap.
          overflow: "hidden",
        }}
      >
        {/* Sliding Track */}
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
            />
          ))}
        </motion.div>
      </div>

      {/* Footer row: “Learn about the benefits” + arrow buttons */}
      <div className="max-w-2xl lg:max-w-5xl mx-auto mt-8 px-4 flex items-center justify-between">
        <div className="text-sm text-gray-300">
          Learn about the benefits &rarr;
        </div>
        <div className="flex items-center gap-2">
          {/* Left Arrow Button */}
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

          {/* Right Arrow Button */}
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