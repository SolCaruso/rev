import Link from 'next/link'
import clsx from 'clsx'

import { Feedback } from '@/components/Feedback'
import { Heading } from '@/components/Heading'
import { Prose } from '@/components/Prose'

export const a = Link
export { Button } from '@/components/Button'
export { CodeGroup, Code as code, Pre as pre } from '@/components/Code'

export function wrapper({ children }) {
  return (
    <article className="flex h-full flex-col pb-10 pt-16">
      <Prose className="flex-auto">{children}</Prose>
      <footer className="mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl">
        <Feedback />
      </footer>
    </article>
  )
}

export const h2 = function H2(props) {
  return <Heading level={2} {...props} />
}

function InfoIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      {/* Outer circle */}
      <circle cx="8" cy="8" r="8" strokeWidth="0" />
      {/* “i” stem */}
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 7.75h1.5v3.5"
      />
      {/* “i” dot */}
      <circle cx="8" cy="4" r=".5" fill="none" />
    </svg>
  )
}

/**
 * Note component with brand red, using #DB2E20.
 * Adjust opacity or shades as you like.
 */
export function Note({ children }) {
  return (
    <div
      className={clsx(
        'my-6 flex gap-2.5 rounded-2xl border p-4 leading-6',
        // Always use dark mode styles:
        'border-[#DB2E20]/30 bg-[#DB2E20]/5 text-[#DB2E20]/80',
        '[--tw-prose-links:theme(colors.white)] [--tw-prose-links-hover:#DB2E20]'
      )}
    >
      <InfoIcon
        className={clsx(
          'mt-1 h-4 w-4 flex-none',
          'fill-[#DB2E20]/30',
          'stroke-[#DB2E20]'
        )}
      />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
    </div>
  )
}

/**
 * Row and Col are unchanged, just normal layout helpers.
 */
export function Row({ children }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  )
}

export function Col({ children, sticky = false }) {
  return (
    <div
      className={clsx(
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky && 'xl:sticky xl:top-24'
      )}
    >
      {children}
    </div>
  )
}

/**
 * Properties and Property: unchanged, just layout + styling.
 */
export function Properties({ children }) {
  return (
    <div className="my-6">
      <ul
        role="list"
        className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-white/5 p-0"
      >
        {children}
      </ul>
    </div>
  )
}

export function Property({ name, children, type }) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code>{name}</code>
        </dd>
        {type && (
          <>
            <dt className="sr-only">Type</dt>
            <dd className="font-mono text-xs text-zinc-500">
              {type}
            </dd>
          </>
        )}
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  )
}