import LandingLayout from "@/components/LandingLayout";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import SportsbookShowcase from "@/components/SportsbookShowcase";

export default function Home() {
  return (
    <LandingLayout>
      <Hero />
      <CardSection />
      <SportsbookShowcase />
    </LandingLayout>
  )
}