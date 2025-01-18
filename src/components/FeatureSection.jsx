import { Container } from '@/components/container'
import { Heading } from '@/components/text'
import { Screenshot } from '@/components/screenshot'
import { StarsContainer } from '@/components/StarsContainer'

export function FeatureSection() {
  return (
    // Remove overflow-hidden so stars can go negative around the screenshot
    <div className="">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          The best odds and highest limits on Solana.
        </Heading>

        {/* A relative wrapper so .Features_stars__YRhs6 can absolutely position */}
        <div className="relative w-fit mx-auto mt-16">
          {/* 
            If you want the stars behind the screenshot, put <StarsContainer /> first with a lower z-index
            and the screenshot after with a higher z-index. 
            If you want the stars above, do the opposite. 
          */}

          {/* Example: stars behind, screenshot on top */}
          <StarsContainer
            // Add an extra className if you want to ensure it spans the same area as the screenshot
            className="absolute inset-0 z-0"
          />

          {/* Screenshot on top */}
          <Screenshot
            width={1216}
            height={768}
            src="/images/webp/app.webp"
            className="relative z-10"
          />
        </div>
      </Container>
    </div>
  )
}