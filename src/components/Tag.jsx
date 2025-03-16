import clsx from 'clsx'

const variantStyles = {
  small: '',
  medium: 'rounded-lg px-1.5 ring-1 ring-inset',
}

const colorStyles = {
  emerald: {
    small: 'text-[#DB2E20]',
    medium: 'ring-[#DB2E20]/30 bg-[#DB2E20]/10 text-[#DB2E20]',
  },
  sky: {
    small: 'text-[#F20165]',
    medium: 'ring-[#F20165]/30 bg-[#F20165]/10 text-[#F20165]',
  },
  amber: {
    small: 'text-[#DB2E20]',
    medium: 'ring-[#DB2E20]/30 bg-[#DB2E20]/10 text-[#DB2E20]',
  },
  rose: {
    small: 'text-[#F20165]',
    medium: 'ring-[#F20165]/30 bg-[#F20165]/10 text-[#F20165]',
  },
  zinc: {
    small: 'text-[#DB2E20]',
    medium: 'ring-[#DB2E20]/30 bg-[#DB2E20]/10 text-[#DB2E20]',
  },
}

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