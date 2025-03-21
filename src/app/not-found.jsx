import { Button } from '@/components/Button'
import { HeroPattern } from '@/components/HeroPattern'

export default function NotFound() {
  return (
    <>
      <HeroPattern />
      <div className="mx-auto flex h-full max-w-xl flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-semibold text-zinc-900 ">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900">
          Page not found
        </h1>
        <p className="mt-2 text-base text-zinc-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/docs" arrow="right" className="mt-8">
          Back to docs
        </Button>
      </div>
    </>
  )
}
