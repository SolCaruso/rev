// app/page.jsx
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main>
      {/* 
        No doc sidebar or search here. Just your hero content. 
      */}
      <section className="py-20">
        <h1 className="text-5xl font-bold text-center">Bet smarter, together.</h1>
        <p className="mt-4 text-center text-lg text-zinc-400">
          Join Solana’s top betting society, with AI-optimized picks…
        </p>
        {/* More content... */}
      </section>

      <Footer />
    </main>
  )
}