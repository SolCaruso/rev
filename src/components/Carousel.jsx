"use client";
import React from "react";
import { motion } from "framer-motion";

const team = [
  { id: 1, name: "NFT Club", title: "Design Advocate", avatar: "/images/check.webp" },
  { id: 2, name: "Gavin Nelson", title: "Designer, Linear", avatar: "/images/check.webp" },
  { id: 3, name: "Isabel Sá",  title: "Designer", avatar: "/images/check.webp" },
  { id: 4, name: "dcfvasdasd Sá",  title: "Designer", avatar: "/images/check.webp" },
  { id: 5, name: "Idsfsdfsd Sá",  title: "Designer", avatar: "/images/check.webp" },
];

// Circular offset helper
function getCircularOffset(i, activeIndex, length) {
  let offset = i - activeIndex;
  offset = ((offset % length) + length) % length;
  if (offset > length / 2) {
    offset -= length;
  }
  return offset;
}

export default function Carousel({ activeIndex, setActiveIndex }) {
  return (
    <div className="relative flex justify-center items-center w-4/5 mx-auto min-h-[250px] mb-8">
      {team.map((person, i) => {
        const offset = getCircularOffset(i, activeIndex, team.length);
        const isActive = offset === 0;
        const isLeft = offset === -1; // Visible card on the left
        const isRight = offset === 1; // Visible card on the right

        return (
          <motion.div
            key={person.id}
            onClick={() => {
                setActiveIndex(i);
            }}
            initial={false}
            animate={{
              x: offset * 260,
              scale: isActive ? 1.05 : 0.95,
              opacity: offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.6 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
            }}
            className={`
              absolute
              grid
              grid-cols-[auto_1fr] 
              grid-rows-[auto_auto]
              gap-x-3
              gap-y-1
              py-5
              px-7
              text-[14px]
              font-semibold
              leading-normal
              tracking-[0.3px]
              rounded-2xl
              ${
                isActive
                  ? // Middle (active) card
                    `
                      bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)]
                      border-t border-r border-l border-[hsla(0,0%,100%,0.06)]
                      shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),_0_2px_40px_10px_rgba(154,170,255,0.05),_0_0_16px_-7px_rgba(154,170,255,0.05)]
                      hover:shadow-none
                      transition-shadow
                      duration-200
                    `
                  : // Inactive (left/right/far) card
                    `
                      bg-gray-800/20
                      border-transparent
                      
                      ${
                        isLeft
                          ? "border-r border-t hover:border-gray-600/40"
                          : isRight
                          ? "border-l border-t hover:border-gray-600/40"
                          : "border-l border-t"
                      }
                      transition-[border-color,border-width] duration-200
                    `
              }
              ${
                Math.abs(offset) <= 1
                  ? "cursor-pointer"
                  : "pointer-events-none cursor-default"
              }
            `}
            style={{
              gridTemplateAreas: `"avatar name" "avatar title"`,
            }}
          >
            {/* Avatar - removed loading="lazy" to avoid preload warning */}
            <img
              alt="Avatar"
              width={48}
              height={48}
              className="rounded-full col-[avatar] row-span-2 w-12 h-12 object-cover bg-gray-600"
              style={{ gridArea: "avatar" }}
              src={person.avatar}
            />

            {/* Name & handle */}
            <div
              className="flex items-center text-gray-100"
              style={{ gridArea: "name" }}
            >
              {person.name}
            </div>

            {/* Title */}
            <span className="text-gray-400" style={{ gridArea: "title" }}>
              {person.title}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}