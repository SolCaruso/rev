"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

// Example data
const team = [
  {
    id: 1,
    name: "Jaime Creixems",
    handle: "webjac",
    title: "Design Advocate",
    avatar: "/images/jaime.jpg",
  },
  {
    id: 2,
    name: "Gavin Nelson",
    handle: "gavmn",
    title: "Designer, Linear",
    avatar: "/images/gavin.jpg",
  },
  {
    id: 3,
    name: "Isabel Sá",
    handle: "isabelsoasa",
    title: "Designer",
    avatar: "/images/isabel.jpg",
  },
  {
    id: 4,
    name: "dcfvasdasd Sá",
    handle: "isabelsoasa",
    title: "Designer",
    avatar: "/images/isabel.jpg",
  },
  {
    id: 5,
    name: "Idsfsdfsd Sá",
    handle: "isabelsoasa",
    title: "Designer",
    avatar: "/images/isabel.jpg",
  },
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

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative flex justify-center items-center w-4/5 mx-auto min-h-[250px] mb-8">
      {team.map((person, i) => {
        // For each person, find how far from the active card
        const offset = getCircularOffset(i, activeIndex, team.length);
        const isActive = offset === 0;

        return (
          <motion.div
            key={person.id}
            onClick={() => handleClick(i)}
            // *** Prevent initial mount animation ***
            initial={false}
            animate={{
              x: offset * 300,
              scale: isActive ? 1.05 : 0.95,
              opacity:
                offset === 0
                  ? 1
                  : Math.abs(offset) === 1
                  ? 0.6
                  : 0,
              // Optional: If you're using zIndex logic, include it here
              // zIndex: 10 - Math.abs(offset)
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
              p-3
              pr-2
              text-[14px]
              font-semibold
              leading-normal
              tracking-[0.3px]
              cursor-pointer
              rounded-lg
              ${
                isActive
                  ? /* Active card: gradient, border, shadow */
                    "bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)] " +
                    "border-t border-r border-l border-[hsla(0,0%,100%,0.06)] " +
                    "shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.1),_0_2px_40px_10px_rgba(154,170,255,0.05),_0_0_16px_-7px_rgba(154,170,255,0.05)]"
                  : "bg-gray-800"
              }
            `}
            style={{
              gridTemplateAreas: `"avatar name" "avatar title"`,
            }}
          >
            {/* Avatar */}
            <img
              alt="Avatar"
              loading="lazy"
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
              <span className="ml-1 text-gray-400">@{person.handle}</span>
            </div>

            {/* Title */}
            <span
              className="text-gray-400"
              style={{ gridArea: "title" }}
            >
              {person.title}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}