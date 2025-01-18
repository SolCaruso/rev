import LandingLayout from "@/components/LandingLayout";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import SportsbookShowcase from "@/components/SportsbookShowcase";
import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'
import { Heading } from '@/components/text'
import { StarsContainer } from '@/components/StarsContainer'


function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
        The best odds and highest limits on Solana.
        </Heading>
        <div className="relative">
          <StarsContainer />
          <Screenshot
            width={1216}
            height={768}
            src="/images/webp/app.webp"
            className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
          />
        </div>
      </Container>
      
    </div>
  )
}

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