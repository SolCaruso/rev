import clsx from 'clsx'

const variantStyles = {
  small: '',
  medium: 'rounded-lg px-1.5 ring-1 ring-inset',
}

// Remap original color keys to your 2 brand colors
// - emerald/amber/zinc => brand red (#DB2E20)
// - sky/rose          => brand pink (#F20165)
const colorStyles = {
  emerald: {
    small: 'text-[#DB2E20] dark:text-[#DB2E20]',
    medium:
      'ring-[#DB2E20]/30 bg-[#DB2E20]/10 text-[#DB2E20] ' +
      'dark:ring-[#DB2E20]/30 dark:bg-[#DB2E20]/10 dark:text-[#DB2E20]',
  },
  sky: {
    small: 'text-[#F20165] dark:text-[#F20165]',
    medium:
      'ring-[#F20165]/30 bg-[#F20165]/10 text-[#F20165] ' +
      'dark:ring-[#F20165]/30 dark:bg-[#F20165]/10 dark:text-[#F20165]',
  },
  amber: {
    small: 'text-[#DB2E20] dark:text-[#DB2E20]',
    medium:
      'ring-[#DB2E20]/30 bg-[#DB2E20]/10 text-[#DB2E20] ' +
      'dark:ring-[#DB2E20]/30 dark:bg-[#DB2E20]/10 dark:text-[#DB2E20]',
  },
  rose: {
    small: 'text-[#F20165] dark:text-[#F20165]',
    medium:
      'ring-[#F20165]/30 bg-[#F20165]/10 text-[#F20165] ' +
      'dark:ring-[#F20165]/30 dark:bg-[#F20165]/10 dark:text-[#F20165]',
  },
  zinc: {
    small: 'text-[#DB2E20] dark:text-[#DB2E20]',
    medium:
      'ring-[#DB2E20]/30 bg-[#DB2E20]/10 text-[#DB2E20] ' +
      'dark:ring-[#DB2E20]/30 dark:bg-[#DB2E20]/10 dark:text-[#DB2E20]',
  },
}

// Keep the same mapping for GET/POST/PUT/DELETE, if desired
const valueColorMap = {
  GET: 'emerald',
  POST: 'sky',
  PUT: 'amber',
  DELETE: 'rose',
}

export function Tag({
  children,
  variant = 'medium',
  color = valueColorMap[children] ?? 'emerald',
}) {
  return (
    <span
      className={clsx(
        'font-mono text-[0.625rem] font-semibold leading-6',
        variantStyles[variant],
        colorStyles[color][variant],
      )}
    >
      {children}
    </span>
  )
}