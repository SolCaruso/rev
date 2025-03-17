"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Card from "@/components/Card";
import RightArrowIcon from "@/components/icons/RightArrow";

// Import all dog images from src/images/png/
import dog1 from "@/images/png/dog1.png";
import dog2 from "@/images/png/dog2.png";
import dog3 from "@/images/png/dog3.png";
import dog4 from "@/images/png/dog4.png";
import dog5 from "@/images/png/dog5.png";
import dog6 from "@/images/png/dog6.png";
import dog7 from "@/images/png/dog7.png";
import dog9 from "@/images/png/dog9.png";
import dog10 from "@/images/png/dog10.png";
import dog14 from "@/images/png/dog14.png";
import dog15 from "@/images/png/dog15.png";
import dog16 from "@/images/png/dog16.png";
import dog21 from "@/images/png/dog21.png";
import dog23 from "@/images/png/dog23.png";
import dog24 from "@/images/png/dog24.png";
import dog27 from "@/images/png/dog27.png";
import dog28 from "@/images/png/dog28.png";
import dog29 from "@/images/png/dog29.png";
import dog31 from "@/images/png/dog31.png";
import dog36 from "@/images/png/dog36.png";

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

// Two copies of the array for seamless looping
const cards = [
  { id: 1, image: dog1.src, color: "green" },
  { id: 2, image: dog2.src, color: "purple" },
  { id: 3, image: dog3.src, color: "blue" },
  { id: 4, image: dog4.src, color: "red" },
  { id: 5, image: dog5.src, color: "yellow" },
  { id: 7, image: dog7.src, color: "green" },
  { id: 6, image: dog6.src, color: "purple" },
  { id: 10, image: dog10.src, color: "blue" },
  { id: 15, image: dog15.src, color: "red" },
  { id: 14, image: dog14.src, color: "yellow" },
  { id: 16, image: dog16.src, color: "green" },
  { id: 9, image: dog9.src, color: "purple" },
  { id: 23, image: dog23.src, color: "blue" },
  { id: 21, image: dog21.src, color: "red" },
  { id: 36, image: dog36.src, color: "yellow" },
  { id: 27, image: dog27.src, color: "green" },
  { id: 31, image: dog31.src, color: "purple" },
  { id: 28, image: dog28.src, color: "blue" },
  { id: 24, image: dog24.src, color: "red" },
  { id: 29, image: dog29.src, color: "yellow" },
];
const combinedCards = [...cards, ...cards];

export default function CardSection() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // xOffset is our current translateX in px
  const [xOffset, setXOffset] = useState(0);
  // Measured width of one copy of the card set
  const [singleSetWidth, setSingleSetWidth] = useState(0);
  const SPEED = 100; // Speed in pixels per second

  useEffect(() => {
    if (!trackRef.current) return;
    requestAnimationFrame(() => {
      const totalWidth = trackRef.current.scrollWidth;
      setSingleSetWidth(Math.round(totalWidth / 2));
    });
  }, []);

  useEffect(() => {
    if (!singleSetWidth) return;
    let rafId;
    let lastTime = performance.now();

    function tick(now) {
      const dt = (now - lastTime) / 1000;
      lastTime = now;
      setXOffset((prev) => {
        let next = prev - SPEED * dt;
        while (next <= -singleSetWidth) {
          next += singleSetWidth;
        }
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
    <motion.section
      className="pb-16 text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Header */}
      <motion.div
        className="max-w-5xl lg:max-w-7xl mx-auto px-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
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
      </motion.div>

      {/* Carousel Container */}
      <motion.div
        ref={containerRef}
        className="relative mx-auto max-w-[1600px] overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div ref={trackRef} className="flex" style={trackStyle}>
          {combinedCards.map((card, idx) => {
            const [topLeft, bottomRight] =
              colorMap[card.color] || ["#ccc", "#fff"];
            return (
              <Card
                key={`${card.id}-${idx}`}
                style={{ flex: "0 0 auto", width: 200, marginRight: 30 }}
                image={card.image}
                colors={[topLeft, bottomRight]}
              />
            );
          })}
        </div>
        {/* Edge Gradients */}
        <div className="pointer-events-none absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-[#111] to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 w-4 h-full bg-gradient-to-l from-[#111] to-transparent" />
      </motion.div>

      {/* Section Footer */}
      <motion.div
        className="max-w-5xl lg:max-w-7xl mx-auto mt-8 px-4 flex items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Link href="/docs/underdawg#benefits" passHref>
          <motion.div
            className="mt-1 text-lg font-bold text-transparent bg-clip-text max-w-sm inline-flex items-center cursor-pointer"
            style={{
              backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)",
            }}
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            Learn <span className="hidden xs-440:block">&nbsp;about the&nbsp;</span>
            benefits
            <motion.div
              className="ml-2"
              variants={arrowVariants}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <RightArrowIcon strokeColor="#4F4F4F" className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.section>
  );
}