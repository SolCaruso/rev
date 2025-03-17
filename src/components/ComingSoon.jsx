"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Import your dice images
import dice1 from "@/images/png/1.png";
import dice2 from "@/images/png/2.png";
import dice3 from "@/images/png/3.png";
import dice4 from "@/images/png/4.png";
import dice5 from "@/images/png/5.png";
import dice6 from "@/images/png/6.png";

// Background image
import comingImage from "@/images/jpg/coming.jpg";

export default function Example() {
  return (
    <main className="relative isolate min-h-[80vh]">
      {/* Background Image with fade-in */}
      <motion.div
        className="absolute inset-0 -z-10 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          alt=""
          src={comingImage}
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      <div className="w-full relative max-w-6xl mx-auto hidden lg:block">
        {/* Dice on the Left */}
        <motion.div
          className="absolute top-20 left-72"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Image src={dice5} alt="Dice 1" width={40} height={80} />
        </motion.div>
        <motion.div
          className="absolute top-40 left-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Image src={dice6} alt="Dice 2" width={150} height={80} />
        </motion.div>
        <motion.div
          className="absolute top-96 left-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Image src={dice2} alt="Dice 3" width={80} height={80} />
        </motion.div>

        {/* Dice on the Right */}
        <motion.div
          className="absolute top-96 right-48"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Image src={dice4} alt="Dice 4" width={40} height={80} />
        </motion.div>
        <motion.div
          className="absolute top-40 right-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Image src={dice1} alt="Dice 5" width={150} height={80} />
        </motion.div>
        <motion.div
          className="absolute top-80 -right-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Image src={dice3} alt="Dice 6" width={60} height={80} />
        </motion.div>
      </div>

      {/* Center Content */}
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-56 2xl:py-72 3xl:py-96 lg:px-8">
        <p className="text-base/8 font-semibold text-white">Stay tuned!</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Coming Soon
        </h1>
        <p className="mt-6 text-pretty text-lg font-medium text-white/70 sm:text-xl/8">
          Solana's community Sportsbook & Casino.
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="/" className="text-sm/7 font-semibold text-white">
            <span aria-hidden="true">&larr;</span> Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}