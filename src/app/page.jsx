import LandingLayout from "@/components/LandingLayout";
import Hero from "@/components/Hero";
import CardSection from "@/components/CardSection";
import { Container } from "@/components/container";
import { Screenshot } from "@/components/screenshot";
import { Heading } from "@/components/text";
import { StarsContainer } from "@/components/StarsContainer";

// Import the new image from src/images/webp
import appImage from "@/images/webp/app.webp";

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          The best odds and highest limits on Solana.
        </Heading>

        <div className="relative">
          <StarsContainer />

          {/* Pass appImage.src so Screenshot sees a string instead of an object */}
          <Screenshot
            width={1216}
            height={768}
            src={appImage.src}
            className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
          />
        </div>
      </Container>
    </div>
  );
}

export default function Home() {
  return (
    <LandingLayout>
      <Hero />
      <CardSection />
      <div className="md:py-20 relative">
        <FeatureSection />
      </div>
    </LandingLayout>
  );
}