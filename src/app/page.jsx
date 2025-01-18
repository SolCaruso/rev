import LandingLayout from "@/components/LandingLayout";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import { FeatureSection } from "@/components/FeatureSection";

export default function Home() {
  return (
    <LandingLayout>
      <Hero />
      <CardSection />
      <div className=" py-32 relative">
          <FeatureSection />
      </div>
    </LandingLayout>
  )
}