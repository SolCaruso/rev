import { clsx } from 'clsx'

export function Heading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'text-pretty text-4xl font-medium tracking-tighter text-white data-[dark]:text-white sm:text-6xl',
      )}
    />
  )
}

export function Subheading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500 data-[dark]:text-gray-400',
      )}
    />
  )
}

export function Lead({ className, ...props }) {
  return (
    <p
      className={clsx(className, 'md:text-2xl font-medium text-gray-400')}
      {...props}
    />
  )
}
