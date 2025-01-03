"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sportsbook from "@/images/jpg/Sportsbook.jpg";

// 1) Generate star positions on the client only
function generateStars(topCount = 20, bottomCount = 80) {
  const stars = [];
  // top area: 0..35% => fewer
  for (let i = 0; i < topCount; i++) {
    stars.push({
      id: `top-${i}`,
      y: Math.random() * 35,
      x: Math.random() * 100,
      size: 1 + Math.random() * 2,
      fadeInDuration: 1.5 + Math.random() * 1.5,
      fadeOutDuration: 1.5 + Math.random() * 2,
      offTime: 2 + Math.random() * 3,
    });
  }
  // bottom area: 35..100% => more
  for (let i = 0; i < bottomCount; i++) {
    stars.push({
      id: `bot-${i}`,
      y: 35 + Math.random() * 65,
      x: Math.random() * 100,
      size: 1 + Math.random() * 2,
      fadeInDuration: 1.5 + Math.random() * 1.5,
      fadeOutDuration: 1.5 + Math.random() * 2,
      offTime: 2 + Math.random() * 3,
    });
  }
  return stars;
}

// A single twinkling star
function Star({ star }) {
  const [phase, setPhase] = useState("off"); // "off" | "fadingIn" | "fadingOut"
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let timeout;

    if (phase === "off") {
      // wait star.offTime sec, then fadeIn
      timeout = setTimeout(() => {
        setPhase("fadingIn");
      }, star.offTime * 1000);
      setOpacity(0);
    } else if (phase === "fadingIn") {
      const startTime = performance.now();
      const tick = (now) => {
        const elapsed = (now - startTime) / 1000;
        if (elapsed < star.fadeInDuration) {
          setOpacity(elapsed / star.fadeInDuration);
          requestAnimationFrame(tick);
        } else {
          setOpacity(1);
          setPhase("fadingOut");
        }
      };
      requestAnimationFrame(tick);
    } else if (phase === "fadingOut") {
      const startTime = performance.now();
      const tick = (now) => {
        const elapsed = (now - startTime) / 1000;
        if (elapsed < star.fadeOutDuration) {
          setOpacity(1 - elapsed / star.fadeOutDuration);
          requestAnimationFrame(tick);
        } else {
          setOpacity(0);
          setPhase("off");
        }
      };
      requestAnimationFrame(tick);
    }

    return () => clearTimeout(timeout);
  }, [phase, star]);

  return (
    <div
      style={{
        position: "absolute",
        top: `${star.y}%`,
        left: `${star.x}%`,
        width: star.size,
        height: star.size,
        borderRadius: "50%",
        backgroundColor: "#ccc",
        opacity,
        pointerEvents: "none",
      }}
    />
  );
}

export default function SportsbookShowcase() {
  const [stars, setStars] = useState([]);
  // 2) We track if the group is expanded
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const generated = generateStars(20, 80);
    setStars(generated);
  }, []);

  // We only do the clickable expansion on large screens
  function handleClick() {
    if (window.innerWidth >= 1024) {
      setExpanded(true);
    }
  }

  // 3) Our group (background rectangle + screenshot) in normal layout
  // Hover scale + click => open
  const normalGroup = (
    <motion.div
      // Slight scale on hover for screens >= 1024px
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 150, damping: 10 }}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
      className="
        mx-auto mt-14
        w-full
        bg-[#15151a]/40
        rounded-3xl
        border border-[#2a2a2a]
        backdrop-blur-[3.94px]
        [box-shadow:
          0px_-5px_58.2px_0px_rgba(155,155,155,0.12),
          inset_-0.9841px_-0.9841px_3.9364px_3.9364px_rgba(177,177,177,0.03)
        ]
      "
    >
      <div className="p-[8px]">
        <img
          src={Sportsbook.src}
          alt="Sportsbook Screenshot"
          className="rounded-[15px] w-full h-auto"
        />
      </div>
    </motion.div>
  );

  return (
    <section
      className="
        relative
        text-white
        overflow-hidden
        min-h-[1200px]
        pt-28
      "
    >
      {/* --- Radial mask so stars fade near edges --- */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 70%, transparent 100%)",
        }}
      >
        <div className="relative w-[1300px] h-[900px] mx-auto mt-14">
          {stars.map((star) => (
            <Star key={star.id} star={star} />
          ))}
        </div>
      </div>

      {/* 4) Normal content area */}
      <div className="max-w-2xl lg:max-w-5xl mx-auto text-center">
        <h2 className="text-xl font-bold">Revolver sportsbook and casino.</h2>
        <p
          className="
            mt-1 text-xl font-bold text-transparent bg-clip-text max-w-md mx-auto
          "
          style={{ backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)" }}
        >
          The best odds and highest limits on Solana.
        </p>

        {/* Show the normal group if not expanded. If expanded, we can hide it for simplicity. */}
        {!expanded && normalGroup}
      </div>

      {/* 5) Fullscreen overlay if expanded */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="overlay"
            className="
              fixed inset-0 z-50
              flex items-center justify-center
              bg-black/70
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setExpanded(false)} // any click closes
          >
            {/* 
              The entire group repeated here, but bigger 
              We'll replicate the rectangle + screenshot so it moves as one unit
            */}
            <motion.div
              className="
                bg-[#15151a]/40
                rounded-3xl
                border border-[#2a2a2a]
                backdrop-blur-[3.94px]
                [box-shadow:
                  0px_-5px_58.2px_0px_rgba(155,155,155,0.12),
                  inset_-0.9841px_-0.9841px_3.9364px_3.9364px_rgba(177,177,177,0.03)
                ]
                p-[8px]
              "
              style={{
                width: "80%", // 80% of viewport
                cursor: "pointer",
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{
                type: "spring",
                bounce: 0.35,
                duration: 0.8,
              }}
              onClick={() => setExpanded(false)} // click on the group also closes
            >
              <img
                src={Sportsbook.src}
                alt="Sportsbook Screenshot Expanded"
                className="rounded-[15px] w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}