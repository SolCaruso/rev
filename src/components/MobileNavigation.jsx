'use client'

import { createContext, Suspense, useContext, useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  TransitionChild,
} from '@headlessui/react'
import { motion } from 'framer-motion'
import { create } from 'zustand'

import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'

function MenuIcon(props) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M.5 1h9M.5 8h9M.5 4.5h9" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m1.5 1 7 7M8.5 1l-7 7" />
    </svg>
  )
}

const IsInsideMobileNavigationContext = createContext(false)

function MobileNavigationDialog({ isOpen, close }) {
  let pathname = usePathname()
  let searchParams = useSearchParams()
  let initialPathname = useRef(pathname).current
  let initialSearchParams = useRef(searchParams).current

  useEffect(() => {
    if (pathname !== initialPathname || searchParams !== initialSearchParams) {
      close()
    }
  }, [pathname, searchParams, close, initialPathname, initialSearchParams])

  function onClickDialog(event) {
    if (!(event.target instanceof HTMLElement)) return

    let link = event.target.closest('a')
    if (link) {
      close()
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClickCapture={onClickDialog}
      onClose={close}
      className="fixed inset-0 z-50 lg:hidden"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 top-14 bg-black/40 backdrop-blur-sm data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <DialogPanel>
        <TransitionChild>
          <Header className="data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in" />
        </TransitionChild>

        <TransitionChild>
          <motion.div
            layoutScroll
            className="fixed bottom-0 left-0 top-14 w-full overflow-y-auto bg-black/50 px-4 pb-4 pt-6 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-900 duration-500 ease-in-out data-[closed]:-translate-x-full min-[416px]:max-w-sm sm:px-6 sm:pb-10 backdrop-blur-md"
          >
            <Navigation />
          </motion.div>
        </TransitionChild>
      </DialogPanel>
    </Dialog>
  )
}

export function useIsInsideMobileNavigation() {
  return useContext(IsInsideMobileNavigationContext)
}

export const useMobileNavigationStore = create()((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export function MobileNavigation() {
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let { isOpen, toggle, close } = useMobileNavigationStore()
  let ToggleIcon = isOpen ? XIcon : MenuIcon

  return (
    <IsInsideMobileNavigationContext.Provider value={true}>
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-white/5"
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <ToggleIcon className="w-2.5 stroke-white" />
      </button>
      {!isInsideMobileNavigation && (
        <Suspense fallback={null}>
          <MobileNavigationDialog isOpen={isOpen} close={close} />
        </Suspense>
      )}
    </IsInsideMobileNavigationContext.Provider>
  )
}