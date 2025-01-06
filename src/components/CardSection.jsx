"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import RightArrowIcon from "@/components/icons/RightArrow";

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 2 },
};

const colorMap = {
  green: ["#698D65", "#A9BBA8"],
  purple: ["#7446DB", "#9776F0"],
  blue: ["#488AC9", "#64AEE8"],
  red: ["#DB2E20", "#F20165"],
  yellow: ["#CB8F05", "#FCD263"],
}; 

const cards = [
  { id: 1, image: "/images/dog1.png", color: "green" },
  { id: 2, image: "/images/dog2.png", color: "purple" },
  { id: 3, image: "/images/dog3.png", color: "blue" },
  { id: 4, image: "/images/dog4.png", color: "red" },
  { id: 5, image: "/images/dog5.png", color: "yellow" },
  { id: 7, image: "/images/dog7.png", color: "green" },
  { id: 6, image: "/images/dog6.png", color: "purple" },
  { id: 10, image: "/images/dog10.png", color: "blue" },
  { id: 15, image: "/images/dog15.png", color: "red" },
  { id: 14, image: "/images/dog14.png", color: "yellow" },
  { id: 16, image: "/images/dog16.png", color: "green" },
  { id: 9, image: "/images/dog9.png", color: "purple" },
  { id: 23, image: "/images/dog23.png", color: "blue" },
  { id: 21, image: "/images/dog21.png", color: "red" },
  { id: 36, image: "/images/dog36.png", color: "yellow" },
  { id: 27, image: "/images/dog27.png", color: "green" },
  { id: 31, image: "/images/dog31.png", color: "purple" },
  { id: 28, image: "/images/dog28.png", color: "blue" },
  { id: 24, image: "/images/dog24.png", color: "red" },
  { id: 29, image: "/images/dog29.png", color: "yellow" },
];

export default function CardSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // xOffset is our current “translateX” in px
  const [xOffset, setXOffset] = useState(0);

  // Measured width of one copy of the card set
  const [singleSetWidth, setSingleSetWidth] = useState(0);

  // Speed (pixels per second)
  const SPEED = 100;

  // Two copies of the array for seamless looping
  const combinedCards = [...cards, ...cards];

  useEffect(() => {
    if (!trackRef.current) return;
    requestAnimationFrame(() => {
      const totalWidth = trackRef.current.scrollWidth;
      // Round the half so we have an integer
      setSingleSetWidth(Math.round(totalWidth / 2));
    });
  }, []);

  // Continuously animate with rAF
  useEffect(() => {
    if (!singleSetWidth) return; // skip if 0

    let rafId;
    let lastTime = performance.now();

    function tick(now) {
      // dt in seconds
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      setXOffset(prev => {
        let next = prev - SPEED * dt;
        // Wrap around if we've moved past one full set
        while (next <= -singleSetWidth) {
          next += singleSetWidth;
        }
        // Optional: If you want to snap offset to int each frame:
        // next = Math.round(next);
        return next;
      });

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [singleSetWidth]);

  const trackStyle = {
    transform: `translateX(${xOffset}px)`,
    whiteSpace: "nowrap",
  };

  return (
    <section className="pb-16 text-white">
      {/* Header */}
      <div className="max-w-5xl lg:max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-xl font-bold">Dawgs only.</h2>
        <p
          className="mt-1 text-xl font-bold text-transparent bg-clip-text max-w-sm"
          style={{
            backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)",
          }}
        >
          Meet the underdawgs, your keys to the most exclusive bettors club on Solana.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative mx-auto max-w-[1600px] overflow-hidden"
      >
        <div ref={trackRef} className="flex" style={trackStyle}>
          {combinedCards.map((card, idx) => {
            const [topLeft, bottomRight] = colorMap[card.color] || ["#ccc", "#fff"];
            return (
              <Card
                key={`${card.id}-${idx}`}
                style={{
                  flex: "0 0 auto",
                  width: 200,
                  marginRight: 30,
                }}
                image={card.image}
                colors={[topLeft, bottomRight]}
              />
            );
          })}
        </div>
        {/* Edge Gradients */}
        <div className="pointer-events-none absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-[#111] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-[#111] to-transparent" />
      </div>

      {/* Footer */}
      <div className="max-w-5xl lg:max-w-7xl mx-auto mt-8 px-4 flex items-center justify-between">
        <Link href="/docs/underdawg#benefits" passHref>
          <motion.div
            className="mt-1 text-base font-bold text-transparent bg-clip-text max-w-sm inline-flex items-center cursor-pointer"
            style={{
              backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)",
            }}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            Learn <span className="hidden xs-440:block">&nbsp;about the&nbsp;</span>
            benefits
            <motion.div className="ml-2" variants={arrowVariants}>
              <RightArrowIcon strokeColor="#4F4F4F" className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
}