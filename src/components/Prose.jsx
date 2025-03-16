import clsx from 'clsx'

export function Prose({ as, className, ...props }) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'prose prose-invert',
        '[html_:where(&>*)]:mx-auto [html_:where(&>*)]:max-w-2xl [html_:where(&>*)]:lg:mx-[calc(50%-min(50%,theme(maxWidth.lg)))] [html_:where(&>*)]:lg:max-w-3xl'
      )}
      {...props}
    />
  )
}