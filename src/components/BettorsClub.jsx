"use client";

import Carousel from "@/components/Carousel";

export default function BettorsClub() {
  return (
    
  <>
      <div className="max-w-5xl lg:max-w-7xl mx-auto pt-40 text-center items-center flex flex-col ">
        <h2 className="text-lg font-semibold text-center sm:text-xl">Revolver Bettors Club</h2>
        <p
          className="text-xl font-semibold text-transparent bg-clip-text max-w-md"
          style={{
            backgroundImage: "linear-gradient(to right, #737373, #4A4A4A)",
          }}
        >
          The most exclusive bettors club on Solana.
        </p>
      </div>
    
      <Carousel />

      <section
      className=" px-4"
      // Inline style to replicate that radial BG + border gradient
      style={{
        maxWidth: '1064px',
        background:
          'radial-gradient(49.41% 64.58% at 49.4% 0%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
        borderTop: '1px solid',
        borderImageSource:
          'linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.19) 30%,rgba(255,255,255,0.19) 70%,transparent)',
        borderImageSlice: 1,
        padding: 'var(--spacing-6) 0 0',
        margin: '0 auto',
      }}
    >

      {/* This is your “testimonial” content in a grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr] items-start pt-28">
        {/* Left: “Top Extension” & “Favorite Feature” */}
        <div className="flex flex-col gap-16">
          {/* First Row */}
          <div className="flex gap-8">
            <p className="text-sm text-gray-400 font-medium font-mono tracking-wide mb-2 flex-shrink-0 py-1">
              Pro Benefits:
            </p>
            <div className="items-center mb-2 ">
              <span className="inline-flex items-center gap-1 py-[.8px] px-1.5 text-sm font-medium text-white bg-white/5 rounded-md mb-4">
                {/* Icon or emoji */}
                <span className="pr-.5">💲</span> RVR Token
              </span>
              <p className="text-sm text-gray-300">
              Image Modification on your fingertips. Trust me, you will love it.
            </p>
            </div>
          </div>
          {/* Second Row */}
          <div className="flex gap-8">
            <p className="text-sm text-gray-400 font-medium font-mono tracking-wide mb-2 flex-shrink-0 py-1">
              Pro Benefits:
            </p>
            <div className="items-center mb-2 ">
              <span className="inline-flex items-center gap-1 py-[.8px] px-1.5 text-sm font-medium text-white bg-white/5 rounded-md mb-4">
                {/* Icon or emoji */}
                <span className="pr-.5">💲</span> RVR Token
              </span>
              <p className="text-sm text-gray-300">
              Image Modification on your fingertips. Trust me, you will love it.
            </p>
            </div>
          </div>
        </div>
    
        {/* Divider (vertical on desktop, horizontal on mobile) */}
        <div className="w-[1.5px] bg-gray-900 h-full my-auto md:mx-8 rounded-full" />
    
        {/* Right: Big Quote */}
        <div className="flex items-center justify-center md:justify-start">
          <blockquote className="relative text-gray-300 max-w-xl text-center md:text-left leading-relaxed">
          <p
            className="
              relative 
              text-lg 
              sm:text-xl 
              font-medium 
              mb-2 
              leading-relaxed
              before:font-serif
              after:font-serif
              before:content-['“'] 
              after:content-['”'] 
              before:absolute 
              after:absolute 
              before:text-5xl 
              after:text-5xl 
              before:text-gray-800 
              after:text-gray-800 
              before:-top-6 
              before:-left-6 
              after:-bottom-6 
              after:-right-6
            "
          >
    Simply replaces so many tools at once.
    </p>
          </blockquote>
        </div>
      </div>
      
    </section>
   </>
  );
}

     