"use client"

export default function SportsbookShowcase() {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Revolver sportsbook and casino.
        </h2>
        <p className="mb-10">
          The best odds and highest limits on Solana.
        </p>

        {/* Sportsbook image or mock screenshot */}
        <div className="w-full max-w-4xl mx-auto">
          <img 
            src="/path/to/sportsbook_screenshot.png"
            alt="Sportsbook Screenshot"
            className="w-full h-auto rounded shadow"
          />
        </div>
      </div>
    </section>
  );
}