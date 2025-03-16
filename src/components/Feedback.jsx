'use client'

import { forwardRef, useState } from 'react'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'

/**
 * CheckIcon with fill/stroke referencing brand color.
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
 * FeedbackButton updated to use only dark mode styling.
 */
function FeedbackButton(props) {
  return (
    <button
      type="submit"
      className="px-3 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white"
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
      <p className="text-sm text-zinc-400">
        Was this page helpful?
      </p>
      <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-white/10">
        <FeedbackButton data-response="yes">Yes</FeedbackButton>
        <div className="bg-white/10" />
        <FeedbackButton data-response="no">No</FeedbackButton>
      </div>
    </form>
  )
})

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
          'bg-[#E71744]/5 text-[#E71744]/80 ring-[#E71744]/30'
        )}
      >
        <CheckIcon
          className={clsx(
            'h-5 w-5 flex-none',
            'stroke-[#E71744]',
            'fill-[#E71744]/30'
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