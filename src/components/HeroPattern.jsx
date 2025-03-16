import { GridPattern } from '@/components/GridPattern'

export function HeroPattern() {
  return (
    <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
      <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] [mask-image:linear-gradient(white,transparent)]">
        <div
          className="
            absolute inset-0 
            bg-gradient-to-r 
            from-[#DB2E20]/30 to-[#F20165]/30 
            opacity-100 
            [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]
          "
        >
          <GridPattern
            width={72}
            height={56}
            x={-12}
            y={4}
            squares={[
              [4, 3],
              [2, 1],
              [7, 3],
              [10, 6],
            ]}
            className="
              absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] 
              fill-white/2.5 stroke-white/5 mix-blend-overlay 
            "
          />
        </div>
      </div>
    </div>
  )
}