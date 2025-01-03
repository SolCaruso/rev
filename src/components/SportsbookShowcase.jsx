"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Sportsbook from "@/images/jpg/Sportsbook.jpg";
import Sportsbook3 from "@/images/jpg/Sportsbook3.jpg";
// Import the small-screen image
import BetSlip from "@/images/png/betslip.png";

/** Generate star data (unchanged) */
function generateStars(topCount = 20, bottomCount = 80) {
  const stars = [];
  // top 0..35% => fewer
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
  // bottom 35..100% => more
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

/** Single star that twinkles with manual animation */
function Star({ star }) {
  const [phase, setPhase] = useState("off"); // "off" | "fadingIn" | "fadingOut"
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    let timeout;
    if (phase === "off") {
      // Wait star.offTime, then fade in
      timeout = setTimeout(() => setPhase("fadingIn"), star.offTime * 1000);
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

/** Main Sportsbook showcase component */
export default function SportsbookShowcase() {
  const [stars, setStars] = useState([]);
  const [expanded, setExpanded] = useState(false);
  // Whether we allow hover/click to open fullscreen
  const [allowFullscreen, setAllowFullscreen] = useState(false);

  // Whether to show BetSlip image (under 800px) or Sportsbook (800px+)
  const [useBetSlip, setUseBetSlip] = useState(false);

  // For storing the user's scroll position so we can restore it
  const scrollYRef = useRef(0);

  /** 1) Generate star data once on mount. */
  useEffect(() => {
    setStars(generateStars(20, 80));
  }, []);

  /** 2) Check screen widths:
   *    - if 800px => useBetSlip = false, else true
   *    - if 1500px => allowFullscreen = true, else false
   */
  useEffect(() => {
    if (typeof window !== "undefined") {
      const w = window.innerWidth;
      setUseBetSlip(w < 800);
      setAllowFullscreen(w >= 1500);
    }
  }, []);

  /**
   * 3) Lock scroll position when expanded (no flicker).
   */
  useEffect(() => {
    if (expanded) {
      // Save current scroll Y
      scrollYRef.current = window.scrollY;
      // Fix the body in place
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const offsetY = Math.abs(parseInt(document.body.style.top || "0", 10));
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, offsetY);
    }
  }, [expanded]);

  /** 
   * 4) Normal rectangle + screenshot (small).
   *    - We swap the <img> src depending on `useBetSlip`
   *    - For small screens (<800), we pin the container to the right with Tailwind utility classes 
   */
  const normalGroup = (
    <motion.div
    whileHover={allowFullscreen ? { scale: 1.01 } : {}}
    whileTap={allowFullscreen ? { scale: 0.99 } : {}}
    transition={{
      type: "spring",
      bounce: 0.15,
      duration: 0.3,
    }}
    style={{
      cursor: allowFullscreen ? "pointer" : "default",
    }}
    onClick={() => {
      if (allowFullscreen) {
        setExpanded(true);
      }
    }}
    className={`
      mt-14
      ${
        useBetSlip
          ? // For BetSlip: remove background, border, shadow, etc.
            "mr-0 ml-auto max-w-xs"
          : // For Sportsbook: keep background, border, shadow, etc.
            "mx-auto w-full bg-[#15151a]/40 md:rounded-3xl rounded-xl border border-[#2a2a2a] backdrop-blur-[3.94px] [box-shadow:0px_-5px_58.2px_0px_rgba(155,155,155,0.12),inset_-0.9841px_-0.9841px_3.9364px_3.9364px_rgba(177,177,177,0.03)]"
      }
    `}
  >
    {/* Conditionally apply 8px padding. */}
    <div className={useBetSlip ? "" : "p-[8px]"}>
      <img
        src={useBetSlip ? BetSlip.src : Sportsbook.src}
        alt={useBetSlip ? "BetSlip Image" : "Sportsbook Screenshot"}
        className={
          useBetSlip
            ? // Bet slip style: left side rounded, right side none
              "md:rounded-l-[15px] md:rounded-r-none rounded-l-[7px] rounded-r-none w-full h-auto"
            : // Sportsbook style: both sides rounded
              "md:rounded-[15px] rounded-[7px] w-full h-auto"
        }
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
      {/* Starfield background */}
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

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl font-bold">Revolver sportsbook and casino.</h2>
        <p
          className="
            mt-1 text-xl font-bold 
            text-transparent bg-clip-text 
            max-w-md mx-auto
          "
          style={{ backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)" }}
        >
          The best odds and highest limits on Solana.
        </p>

        {/* Show normal layout if not expanded */}
        {!expanded && normalGroup}
      </div>

      {/* Fullscreen overlay (only if expanded) */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "none" }}
            initial={{ opacity: 0, scale: [0.95] }}
            animate={{ opacity: 1, scale: [0.95, 1.05, 1] }}
            exit={{ opacity: [1, 0], scale: [1, 1.05, 0.95] }}
            transition={{
              opacity: { duration: 0.3 },
              scale: {
                type: "spring",
                bounce: 0.3,
                duration: 0.6,
              },
            }}
            onClick={() => setExpanded(false)}
          >
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
                width: "80%",
                cursor: "pointer",
              }}
            >
              <img
                src={Sportsbook3.src}
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