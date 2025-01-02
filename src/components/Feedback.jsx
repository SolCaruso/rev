'use client'

import { forwardRef, useState } from 'react'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'

/**
 * CheckIcon with fill/stroke referencing brand color. 
 * Feel free to tweak as desired.
 */
function CheckIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="10" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
      />
    </svg>
  )
}

/**
 * We’ll keep the ‘Yes’/’No’ buttons fairly neutral
 * but you can update them to brand colors if desired.
 */
function FeedbackButton(props) {
  return (
    <button
      type="submit"
      className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
      {...props}
    />
  )
}

const FeedbackForm = forwardRef(function FeedbackForm(
  { onSubmit, className, ...props },
  ref
) {
  return (
    <form
      {...props}
      ref={ref}
      onSubmit={onSubmit}
      className={clsx(
        className,
        'absolute inset-0 flex items-center justify-center gap-6 md:justify-start'
      )}
    >
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Was this page helpful?
      </p>
      <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
        <FeedbackButton data-response="yes">Yes</FeedbackButton>
        <div className="bg-zinc-900/10 dark:bg-white/10" />
        <FeedbackButton data-response="no">No</FeedbackButton>
      </div>
    </form>
  )
})

/**
 * Updated the “Thanks for your feedback!” bubble
 * to use brand colors instead of emerald references.
 *
 * We’ve replaced:
 * - bg-emerald-50/50 => brand color background with a bit of transparency
 * - text-emerald-900 => brand color text
 * - ring-emerald-500/20 => brand color ring
 * - dark:bg-emerald-500/5 => brand color background for dark mode
 * - dark:text-emerald-200 => brand color for dark text
 * - dark:ring-emerald-500/30 => brand color ring for dark mode
 * - fill-emerald-500 => brand color fill for check icon
 */
const FeedbackThanks = forwardRef(function FeedbackThanks(
  { className, ...props },
  ref
) {
  return (
    <div
      {...props}
      ref={ref}
      className={clsx(
        className,
        'absolute inset-0 flex justify-center md:justify-start'
      )}
    >
      <div
        className={clsx(
          'flex items-center gap-3 rounded-full py-1 pl-1.5 pr-3 text-sm ring-1 ring-inset',
          // Light mode background: brand color with slight transparency
          'bg-[#E71744]/10 text-[#E71744] ring-[#E71744]/20',
          // Dark mode background: brand color with a bit less transparency
          'dark:bg-[#E71744]/5 dark:text-[#E71744]/80 dark:ring-[#E71744]/30'
        )}
      >
        <CheckIcon
          className={clsx(
            'h-5 w-5 flex-none stroke-white',
            // Light mode fill => brand color
            'fill-[#E71744]',
            // Dark mode fill => brand color with transparency
            'dark:fill-[#E71744]/30 dark:stroke-[#E71744]'
          )}
        />
        Thanks for your feedback!
      </div>
    </div>
  )
})

export function Feedback() {
  let [submitted, setSubmitted] = useState(false)

  function onSubmit(event) {
    event.preventDefault()
    // event.nativeEvent.submitter.dataset.response => "yes" or "no"
    setSubmitted(true)
  }

  return (
    <div className="relative h-8">
      <Transition show={!submitted}>
        <FeedbackForm
          className="duration-300 data-[leave]:pointer-events-none data-[closed]:opacity-0"
          onSubmit={onSubmit}
        />
      </Transition>
      <Transition show={submitted}>
        <FeedbackThanks className="delay-150 duration-300 data-[closed]:opacity-0" />
      </Transition>
    </div>
  )
}