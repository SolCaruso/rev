"use client";

import { motion } from "framer-motion";
import DocsIcon from "@/components/icons/Docs";
import DiscordIcon from "@/components/icons/Discord";
import RightArrowIcon from "@/components/icons/RightArrow";
import WishList from "./WishList";
import pokerImage from "@/images/png/poker.png";
import Link from "next/link";

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 3 },
};

export default function Hero() {
  return (
    <section className="relative pt-32 md:pt-52 pb-32">
      {/* The main hero content is above the background (z-10) */}
      <div className="max-w-[540px] mx-auto text-center relative z-10">
        {/* Headline */}
        <h1
          className="
            text-[2.5rem]
            md:text-[3.3rem]
            font-bold
            md:leading-tight
            leading-10
            [text-shadow:0_4px_4px_rgba(0,0,0,0.15)]
            [font-feature-settings:'ss08'_on,'ss02'_on,'liga'_off]
          "
        >
          Bet smarter,{" "}
          <span className="bg-gradient-to-b from-[#db2e20] to-[#f20165] text-transparent bg-clip-text">
            together
          </span>
          <span className="text-[#f20165] text-5xl font-bold">.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xs md:text-base font-medium leading-snug text-white">
          Join Solana’s top betting society, with AI-optimized picks from
          profitable handicappers, and a dedicated, community-focused sportsbook.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 m-12 flex-col xs-440:flex-row ">
          {/* "Read more" button */}
          <Link href="/docs" passHref>
          <motion.div
            className="
              inline-flex 
              items-center 
              justify-center
              gap-2
              min-h-[36px]
              px-3.5 py-1.5
              text-[14px] 
              font-medium 
              leading-[16px]
              tracking-[0.2px]
              whitespace-nowrap
              cursor-pointer
              border-none
              rounded-md
              transition-colors
              duration-200
              ease-in-out
              bg-[#E6E6E6]
              hover:bg-[#FFF]
              shadow-[0_0_2px_rgba(0,0,0,0.5),_0_0_14px_rgba(255,255,255,0.19),_inset_0_-1px_0.4px_rgba(0,0,0,0.2)]
              opacity-90
              hover:opacity-100
              text-black
            "
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <DocsIcon className="sm:w-4 h-4" />
            <span>Read more</span>
          </motion.div>
        </Link>

          {/* Motion-enabled "Join the pack" button */}
          <Link href="https://discord.gg/revolver-ag" passHref>
          <motion.div
            className="
              inline-flex
              items-center
              px-3.5
              py-1.5
              xs:text-sm
              font-medium
              text-[#E6E6E6]
                hover:text-[#FFF]
              rounded-md
              bg-transparent
            "
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <DiscordIcon className="w-4 h-4 mr-2" />
            Join the pack

            {/* Only the arrow moves on button hover */}
            <motion.div className="ml-2" variants={arrowVariants}>
              <RightArrowIcon className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </Link>
      </div>

        <WishList />
      </div>

      {/* Absolutely-positioned background image */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          mx-auto
          max-w-screen-xl
          w-6/7
          h-full

          z-0
        "
        style={{
          backgroundImage: `url(${pokerImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
    </section>
  );
}