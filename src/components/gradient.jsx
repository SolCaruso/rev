import { clsx } from 'clsx'

export function Gradient({ className, ...props }) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#db2e20] from-[28%] via-[#f20165] via-[70%] to-[#FF6F6F] sm:bg-[linear-gradient(145deg,var(--tw-gradient-stops))]',
      )}
    />
  )
}

export function GradientBackground() {
  return (
    <div className="relative mx-auto max-w-7xl">
      <div
        className={clsx(
          'absolute -right-60 -top-96 h-60 w-[36rem] transform-gpu md:right-0',
          'bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#db2e20] from-[28%] via-[#f20165] via-[70%] to-[#FF6F6F]',
          'rotate-[-10deg] rounded-full blur-3xl opacity-75',
        )}
      />
    </div>
  )
}