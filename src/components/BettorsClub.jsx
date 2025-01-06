
export default function BettorsClub() {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen py-12 px-4 text-white">
      {/* -------------- AI Stroke Row -------------- */}
      <div className="relative mt-12 flex items-center justify-center">
        {/* Left gradient stroke */}
        <svg
          className="w-48 h-1 sm:w-64"
          viewBox="0 0 272 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1L271.5 1" stroke="url(#rightGradient)" />
          <defs>
            <linearGradient
              id="rightGradient"
              x1="271.5"
              y1="1.00169"
              x2="0"
              y2="0.501689"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ECA5A7" />
              <stop offset="0.165137" stopColor="#581D27" />
              <stop offset="1" stopColor="#190E14" />
            </linearGradient>
          </defs>
        </svg>

        {/* “AI” text in the middle */}
        <span className="text-sm font-medium text-red-400 tracking-wide px-4">AI</span>

        {/* Right gradient stroke */}
        <svg
          className="w-48 h-1 sm:w-64"
          viewBox="0 0 272 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1L271.5 1" stroke="url(#leftGradient)" />
          <defs>
            <linearGradient
              id="leftGradient"
              x1="-0.500003"
              y1="0.501689"
              x2="271.5"
              y2="1.00169"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ECA5A7" />
              <stop offset="0.165137" stopColor="#581D27" />
              <stop offset="1" stopColor="#190E14" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* -------------- Headline -------------- */}
      <h1 className="mt-6 text-2xl font-semibold text-center sm:text-3xl">
        Sharpshooter AI Agent
      </h1>
      <p className="mt-1 text-base text-gray-400 sm:text-lg">
        Your Betting Companion
      </p>

      {/* -------------- Main “window” area -------------- */}
      <div className="relative mt-12 w-full max-w-4xl mb-24">
{/* Outer frame container */}
<div
  className="relative p-2 rounded-2xl bg-gradient-to-br from-[#d32e3b] via-[#110818] to-[#45223e] border border-[#3a3a3a]"
  style={{
    boxShadow: `
      0 0 40px 20px rgba(255, 255, 255, 0.03),
      inset 0 0.5px 0 rgba(255, 255, 255, 0.3)`,
  }}
>
  {/* Inner frame */}
  <div className="relative mx-auto w-full p-6 rounded-xl border border-[hsla(0,0%,100%,0.08)] bg-gradient-to-b from-black via-[#131313] to-[#0c0c0c] backdrop-blur-md shadow-xl">
    {/* Big radial gradient shape in the background */}
    <div
      className="absolute -top-40 -right-24 w-[700px] h-[700px] bg-red-600/50 rounded-full blur-[140px] pointer-events-none opacity-70"
    />

    {/* Floating note (like the one in the frame design) */}
    <div className="absolute top-4 left-4 flex items-center space-x-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="12"
        viewBox="0 0 48 12"
        fill="none"
      >
        <circle cx="6" cy="6" r="6" fill="#ED5656" />
        <circle cx="24" cy="6" r="6" fill="#353749" />
        <circle cx="42" cy="6" r="6" fill="#353749" />
      </svg>
    </div>

    {/* Content area */}
    <div className="flex flex-col sm:flex-row relative z-10 gap-6 ">
      {/* Sidebar with profile image */}
      <div className="flex flex-col w-48 md:w-56 text-gray-200  p-3 mt-6 flex-shrink-0 self-center">
        <img
          src="/images/wildhart-pfp.webp"
          alt="user"
          className="w-full rounded-full border border-slate-200/5 bg-slate-600/5 backdrop-blur-3xl"
        />
      </div>

      {/* Main content area */}
      <div className="self-center pt-6">
        <h3 className="text-2xl font-semibold mb-2 sm:text-3xl sm:text-left text-center">
          Lily Wildhart
        </h3>
        <p className="text-base transition-colors bg-gradient-to-r from-neutral-300/[35%] via-neutral-300/90 to-neutral-300/[35%] bg-clip-text text-transparent sm:text-lg sm:text-left text-center">
          Lily compiles expert picks in the Revolver Handicapper Index and shares profitable ones with Bettors Club members, along with a score reflecting consensus, historical strengths, and market data.
        </p>
       <button className="mt-6" >Learn more</button>
      </div>
    </div>

    {/* Example action bar at the bottom (like search or other options) */}
    <div className="mt-8 flex items-center space-x-4">
      <div className="flex-grow">
        <span className="block w-full h-[1px] transition-colors bg-gradient-to-r from-neutral-300/[35%] via-neutral-300/90 to-neutral-300/[35%] opacity-40"></span>
      </div>
      <p className="text-sm transition-colors bg-gradient-to-r from-neutral-300/[35%] via-neutral-300/90 to-neutral-300/[35%] bg-clip-text text-transparent">Quering handicapper index..</p>
    </div>
  </div>
</div>
</div>

     {/* Wildhart Float*/}
     
 

      {/* -------------- TESTIMONIALS SECTION -------------- */}
      <section

      
        className=" mx-auto px-4"
        // Inline style to replicate that radial BG + border gradient
        style={{
          maxWidth: '1064px',
          background:
            'radial-gradient(49.41% 64.58% at 49.4% 0%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
          borderTop: '1px solid',
          borderImageSource:
            'linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.19) 30%,rgba(255,255,255,0.19) 70%,transparent)',
          borderImageSlice: 1,
          padding: 'var(--spacing-6) 0 0', // or tailwind style of your choice
          margin: '0 auto',
        }}
      >
        {/* Title Above the Cards (centered) */}
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold pt-24 pb-2 text-gray-200">
            Built for professionals like you.
          </h2>
          <p className="text-gray-400 mt-1">Used by seriously productive people.</p>
        </div>

        {/* This is your “testimonial” content in a grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr] items-start">
          {/* Left: “Top Extension” & “Favorite Feature” */}
          <div className="flex flex-col gap-8">
            {/* Top Extension */}
            <div>
              <p className="text-sm text-gray-400 uppercase font-medium tracking-wide mb-2">
                Top Extension:
              </p>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2 py-1 text-sm font-medium text-white bg-gray-600 rounded-md">
                  {/* Icon or emoji */}
                  <span>🎨</span> Image Modification
                </span>
              </div>
              <p className="text-sm text-gray-300">
                “Image Modification on your fingertips. Trust me, you will love it.”
              </p>
            </div>

            {/* Favorite Feature */}
            <div>
              <p className="text-sm text-gray-400 uppercase font-medium tracking-wide mb-2">
                Favorite Feature:
              </p>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2 py-1 text-sm font-medium text-white bg-gray-600 rounded-md">
                  <span>🔥</span> Emoji Picker
                </span>
              </div>
              <p className="text-sm text-gray-300">
                “So fast and better than the native OS.”
              </p>
            </div>
          </div>

          {/* Divider (vertical on desktop, horizontal on mobile) */}
          <div className="hidden md:block w-[2px] bg-gray-600 my-auto md:mx-8" />
          <div className="block md:hidden w-full h-[1px] bg-gray-600" />

          {/* Right: Big Quote */}
          <div className="flex items-center justify-center md:justify-start">
            <blockquote className="relative text-gray-300 max-w-xl text-center md:text-left leading-relaxed">
              <p className="text-lg sm:text-xl font-medium mb-2">
                Simply replaces so many tools at once.
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}