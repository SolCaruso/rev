"use client";

import { motion } from "framer-motion";
import DocsIcon from "@/components/icons/Docs";
import DiscordIcon from "@/components/icons/Discord";
import RightArrowIcon from "@/components/icons/RightArrow";
import pokerImage from "@/images/webp/poker.webp";
import Link from "next/link";
import styles from "./WishList.module.css";
import { Heading } from '@/components/text'
import Paw from "@/components/icons/Paw";

export default function Hero() {
  return (
<section className="relative pt-20 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background (fades in, no motion) */}
      <motion.div
        className="absolute inset-x-0 top-0 mx-auto max-w-screen-xl w-6/7 h-full z-0"
        style={{
          backgroundImage: `url(${pokerImage.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Hero Content */}
      <div className="max-w-[600px] mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h1
          className="max-w-3xl font-bold text-5xl sm:text-6xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bet smarter,{" "}
          <span className="bg-gradient-to-b from-[#db2e20] to-[#f20165] text-transparent bg-clip-text">
            together.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="transition-colors bg-gradient-to-r from-gray-50 via-neutral-300/90 to-gray-400 bg-clip-text text-transparent mt-8 font-medium text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join Solana’s top betting society, with AI-optimized picks from profitable handicappers, and a dedicated, community-focused sportsbook.
        </motion.p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 m-12 flex-col xs-440:flex-row ">
          {/* "Read more" button */}
          <Link href="/nft" passHref>
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
            >
              <DocsIcon className="sm:w-4 h-4" />
              <span>Learn more</span>
            </motion.div>
          </Link>

          {/* Motion-enabled "Join the pack" button */}
          <Link href="/bettors-club" passHref>
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
                transition-colors
                duration-300
              "
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <Paw className="w-4 h-auto mr-2" />
              Join the pack

              {/* Hover animation for arrow */}
              <motion.div
                className="ml-2"
                variants={{
                  rest: { x: 0 },
                  hover: { x: 3 },
                }}
                transition={{ type: "tween", duration: 0.3 }}
              >
                <RightArrowIcon className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </Link>
        </div>

        <a
          href="https://discord.gg/revolver-ag"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex justify-center mt-8">
            <div className={`${styles.wishlistOuter} ${styles.wishlistAnimate}`}>
              <div className={styles.wishlistAnnouncement}>
                <span>Whitelist now open</span>
                <span className={styles.wishlistMuted}>
                  Join whitelist
                  <RightArrowIcon />
                </span>
              </div>
            </div>
          </div>
        </a>
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