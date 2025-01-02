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

/**
 * A monochromatic (black/white/gray) button theme:
 * - “primary” => black background, white text
 * - “secondary” => light-gray background, black text
 * - “filled” => an alternative black or dark-gray background
 * - “outline” => black text + border, hover => tinted
 * - “text” => black text only
 *
 * For dark mode, we tint in the opposite direction to maintain a consistent look.
 * You can adjust these shades to your liking.
 */
const variantStyles = {
  // 1) Primary: black background, white text
  //    Hover => slightly lighter black (dark gray)
  primary: clsx(
    'rounded-full py-1 px-3 transition',
    'bg-black text-white hover:bg-neutral-800',
    // Dark mode: we might keep it the same or lighten it even further
    'dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-700'
  ),

  // 2) Secondary: gray background, black text
  //    Hover => a bit darker gray
  secondary: clsx(
    'rounded-full py-1 px-3 transition',
    'bg-neutral-200 text-black hover:bg-neutral-300',
    'dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-600'
  ),

  // 3) Filled: another strong button style, black or near-black
  //    Slightly different from primary if you want variety
  filled: clsx(
    'rounded-full py-1 px-3 text-white transition',
    'bg-neutral-800 hover:bg-neutral-700', 
    'dark:bg-neutral-800 dark:hover:bg-neutral-600'
  ),

  // 4) Outline: black text, ring of black or dark gray
  //    Hover => mild gray background
  outline: clsx(
    'rounded-full py-1 px-3 transition',
    'text-black ring-1 ring-inset ring-black/40 hover:bg-neutral-100',
    'dark:text-white dark:ring-white/30 dark:hover:bg-neutral-800'
  ),

  // 5) Text: purely textual link in black
  //    Hover => darker black or shift to neutral-800
  text: clsx(
    'transition',
    'text-black hover:text-neutral-800',
    'dark:text-white dark:hover:text-neutral-400'
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