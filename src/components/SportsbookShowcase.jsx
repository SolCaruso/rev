"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import BetSlip from "@/images/png/betslip.png"; // Keep BetSlip as it is

// Updated to use images from the public folder
const sportsbookImg = "/images/Sportsbook2.jpg";
const sportsbook3Img = "/images/Sportsbook3.jpg";

function generateStars(topCount = 20, bottomCount = 80) {
  const stars = [];
  // top 0..35%
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
  // bottom 35..100%
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

export default function SportsbookShowcase() {
  const [stars, setStars] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [allowFullscreen, setAllowFullscreen] = useState(false);
  const [useBetSlip, setUseBetSlip] = useState(false);
  const scrollYRef = useRef(0);

  useEffect(() => {
    setStars(generateStars(20, 80));
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const w = window.innerWidth;
      setUseBetSlip(w < 800);
      setAllowFullscreen(w >= 1800);
    }
  }, []);

  useEffect(() => {
    if (expanded) {
      scrollYRef.current = window.scrollY;
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
        maxWidth: "min(100%)",
        height: "auto",
        transform: "translateZ(0)",
        background:
          "radial-gradient(85.77% 49.97% at 51% 5.12%, hsla(0, 100%, 79%, .11) 0, rgba(222, 226, 255, .08) 45.83%, rgba(241, 242, 255, .02) 100%), rgba(0, 0, 0, .44)",
        boxShadow:
          "0 0 40px 20px hsla(0,0%,100%,.03),inset 0 .5px 0 0 hsla(0,0%,100%,.3)",
      }}
      onClick={() => {
        if (allowFullscreen) {
          setExpanded(true);
        }
      }}
      className={[
        "mt-14",
        "mx-auto",
        "relative",
        "w-full",
        "p-2",
        "border",
        "border-[hsla(0,0%,100%,0.08)]",
        "shadow-[0_40px_20px_rgba(255,255,255,0.03),_inset_0_0.5px_0_rgba(255,255,255,0.3)]",
        "backdrop-blur-[2px]",
        "rounded-xl", // Ensure corners match
      ].join(" ")}
    >
      <img
        src={useBetSlip ? BetSlip.src : sportsbookImg}
        alt={useBetSlip ? "BetSlip Image" : "Sportsbook Screenshot"}
        // The same corner radius, so all 4 corners are consistently rounded
        className={
          "w-90 h-auto rounded-xl" +
          (useBetSlip ? "shadow-lg" : "shadow-md")
        }
      />
    </motion.div>
  );

  return (
    <section className="relative text-white overflow-hidden min-h-[1200px] pt-28 pb-44">
      <div
        className="absolute inset-0 -z-10"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 70%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 70%, transparent 100%)",
        }}
      >
        <div className="relative w-[1600px] h-[900px] mx-auto mt-14">
          {stars.map((star) => (
            <Star key={star.id} star={star} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl font-bold">Revolver sportsbook and casino.</h2>
        <p
          className="mt-1 text-xl font-bold text-transparent bg-clip-text max-w-md mx-auto"
          style={{
            backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)",
          }}
        >
          The best odds and highest limits on Solana.
        </p>
        {!expanded && normalGroup}
      </div>

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
              className="bg-[#15151a]/40 rounded-xl border border-[#2a2a2a] backdrop-blur-[3.94px] p-[8px]"
              style={{
                width: "80%",
                cursor: "pointer",
              }}
            >
              <img
                src={sportsbook3Img}
                alt="Sportsbook Screenshot Expanded"
                className="rounded-xl w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}