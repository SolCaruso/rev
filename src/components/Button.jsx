import Link from 'next/link'
import clsx from 'clsx'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  )
}

const variantStyles = {
  primary: clsx(
    'rounded-full py-1 px-3 transition',
    'bg-neutral-900 text-white hover:bg-neutral-700'
  ),
  secondary: clsx(
    'rounded-full py-1 px-3 transition',
    'bg-neutral-700 text-white hover:bg-neutral-600'
  ),
  filled: clsx(
    'rounded-full py-1 px-3 text-white transition',
    'bg-neutral-800 hover:bg-neutral-600'
  ),
  outline: clsx(
    'rounded-full py-1 px-3 transition',
    'text-white ring-1 ring-inset ring-white/30 hover:bg-neutral-800'
  ),
  text: clsx(
    'transition',
    'text-white hover:text-neutral-400'
  ),
}

export function Button({
  variant = 'primary',
  className,
  children,
  arrow,
  ...props
}) {
  className = clsx(
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium',
    variantStyles[variant],
    className
  )

  let arrowIcon = (
    <ArrowIcon
      className={clsx(
        'mt-0.5 h-5 w-5',
        variant === 'text' && 'relative top-px',
        arrow === 'left' && '-ml-1 rotate-180',
        arrow === 'right' && '-mr-1'
      )}
    />
  )

  let inner = (
    <>
      {arrow === 'left' && arrowIcon}
      {children}
      {arrow === 'right' && arrowIcon}
    </>
  )

  if (typeof props.href === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}