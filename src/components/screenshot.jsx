import { clsx } from 'clsx'


export function Screenshot({ width, height, src, className }) {
  return (
    <div
      style={{ '--width': width, '--height': height }}
      className={clsx(
        className,
        'relative aspect-[var(--width)/var(--height)] [--radius:theme(borderRadius.xl)]'
      )}
    >
      {/* Here’s the glow backdrop */}
      <div className="backdrop -z-10" />

      {/* Optional ‘frame’ shadow */}
      <div className="absolute -inset-[var(--padding)] rounded-[calc(var(--radius)+var(--padding))] shadow-sm ring-1 ring-white/5 [--padding:theme(spacing.2)]" />



      {/* The actual screenshot */}
      <img
        alt=""
        src={src}
        className="h-full rounded-[var(--radius)] shadow-glow ring-1 ring-white/10"
      />
    </div>
  )
}