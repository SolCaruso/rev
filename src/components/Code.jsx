// 'use client'

// import {
//   Children,
//   createContext,
//   isValidElement,
//   useContext,
//   useEffect,
//   useRef,
//   useState,
// } from 'react'
// import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
// import clsx from 'clsx'
// import { create } from 'zustand'

// import { Tag } from '@/components/Tag'

// /**
//  * Two brand colors:
//  * - #E71744 (primary deeper pinkish-red)
//  * - #FF494D (secondary bright red-pink)
//  */

// const languageNames = {
//   js: 'JavaScript',
//   ts: 'TypeScript',
//   javascript: 'JavaScript',
//   typescript: 'TypeScript',
//   php: 'PHP',
//   python: 'Python',
//   ruby: 'Ruby',
//   go: 'Go',
// }

// function getPanelTitle({ title, language }) {
//   if (title) {
//     return title
//   }
//   if (language && language in languageNames) {
//     return languageNames[language]
//   }
//   return 'Code'
// }

// function ClipboardIcon(props) {
//   return (
//     <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
//       <path
//         strokeWidth="0"
//         d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
//       />
//       <path
//         fill="none"
//         strokeLinejoin="round"
//         d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
//       />
//     </svg>
//   )
// }

// function CopyButton({ code }) {
//   let [copyCount, setCopyCount] = useState(0)
//   let copied = copyCount > 0

//   useEffect(() => {
//     if (copyCount > 0) {
//       let timeout = setTimeout(() => setCopyCount(0), 1000)
//       return () => {
//         clearTimeout(timeout)
//       }
//     }
//   }, [copyCount])

//   return (
//     <button
//       type="button"
//       className={clsx(
//         'group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100',
//         copied
//           ? 'bg-[#E71744]/10 ring-1 ring-inset ring-[#E71744]/20'
//           : 'bg-white/2.5 hover:bg-white/5'
//       )}
//       onClick={() => {
//         window.navigator.clipboard.writeText(code).then(() => {
//           setCopyCount((count) => count + 1)
//         })
//       }}
//     >
//       <span
//         aria-hidden={copied}
//         className={clsx(
//           'pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300',
//           copied && '-translate-y-1.5 opacity-0'
//         )}
//       >
//         <ClipboardIcon className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400" />
//         Copy
//       </span>
//       <span
//         aria-hidden={!copied}
//         className={clsx(
//           'pointer-events-none absolute inset-0 flex items-center justify-center text-[#E71744] transition duration-300',
//           !copied && 'translate-y-1.5 opacity-0'
//         )}
//       >
//         Copied!
//       </span>
//     </button>
//   )
// }

// function CodePanelHeader({ tag, label }) {
//   if (!tag && !label) return null

//   return (
//     <div className="flex h-9 items-center gap-2 border-y border-b-white/5 border-t-transparent bg-white/1 px-4">
//       {tag && (
//         <div className="flex">
//           <Tag variant="small">{tag}</Tag>
//         </div>
//       )}
//       {tag && label && <span className="h-0.5 w-0.5 rounded-full bg-zinc-500" />}
//       {label && (
//         <span className="font-mono text-xs text-zinc-400">{label}</span>
//       )}
//     </div>
//   )
// }

// function CodePanel({ children, tag, label, code }) {
//   let child = Children.only(children)

//   if (isValidElement(child)) {
//     tag = child.props.tag ?? tag
//     label = child.props.label ?? label
//     code = child.props.code ?? code
//   }

//   if (!code) {
//     throw new Error(
//       '`CodePanel` requires a `code` prop, or a child with a `code` prop.'
//     )
//   }

//   return (
//     <div className="group bg-zinc-900">
//       <CodePanelHeader tag={tag} label={label} />
//       <div className="relative">
//         <pre className="overflow-x-auto p-4 text-xs text-white">{children}</pre>
//         <CopyButton code={code} />
//       </div>
//     </div>
//   )
// }

// function CodeGroupHeader({ title, children, selectedIndex }) {
//   let hasTabs = Children.count(children) > 1

//   if (!title && !hasTabs) return null

//   return (
//     <div className="flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4">
//       {title && (
//         <h3 className="mr-auto pt-3 text-xs font-semibold text-white">
//           {title}
//         </h3>
//       )}
//       {hasTabs && (
//         <TabList className="-mb-px flex gap-4 text-xs font-medium">
//           {Children.map(children, (child, childIndex) => (
//             <Tab
//               className={clsx(
//                 'border-b py-3 transition ui-not-focus-visible:outline-none',
//                 childIndex === selectedIndex
//                   ? 'border-[#E71744] text-[#E71744]'
//                   : 'border-transparent text-zinc-400 hover:text-zinc-300'
//               )}
//             >
//               {getPanelTitle(isValidElement(child) ? child.props : {})}
//             </Tab>
//           ))}
//         </TabList>
//       )}
//     </div>
//   )
// }

// function CodeGroupPanels({ children, ...props }) {
//   let hasTabs = Children.count(children) > 1

//   if (hasTabs) {
//     return (
//       <TabPanels>
//         {Children.map(children, (child) => (
//           <TabPanel>
//             <CodePanel {...props}>{child}</CodePanel>
//           </TabPanel>
//         ))}
//       </TabPanels>
//     )
//   }

//   return <CodePanel {...props}>{children}</CodePanel>
// }

// function usePreventLayoutShift() {
//   let positionRef = useRef(null)
//   let rafRef = useRef()

//   useEffect(() => {
//     return () => {
//       if (typeof rafRef.current !== 'undefined') {
//         window.cancelAnimationFrame(rafRef.current)
//       }
//     }
//   }, [])

//   return {
//     positionRef,
//     preventLayoutShift(callback) {
//       if (!positionRef.current) return

//       let initialTop = positionRef.current.getBoundingClientRect().top

//       callback()

//       rafRef.current = window.requestAnimationFrame(() => {
//         let newTop =
//           positionRef.current?.getBoundingClientRect().top ?? initialTop
//         window.scrollBy(0, newTop - initialTop)
//       })
//     },
//   }
// }

// const usePreferredLanguageStore = create()((set) => ({
//   preferredLanguages: [],
//   addPreferredLanguage: (language) =>
//     set((state) => ({
//       preferredLanguages: [
//         ...state.preferredLanguages.filter(
//           (preferredLanguage) => preferredLanguage !== language
//         ),
//         language,
//       ],
//     })),
// }))

// function useTabGroupProps(availableLanguages) {
//   let { preferredLanguages, addPreferredLanguage } = usePreferredLanguageStore()
//   let [selectedIndex, setSelectedIndex] = useState(0)
//   let activeLanguage = [...availableLanguages].sort(
//     (a, z) => preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a)
//   )[0]
//   let languageIndex = availableLanguages.indexOf(activeLanguage)
//   let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex
//   if (newSelectedIndex !== selectedIndex) {
//     setSelectedIndex(newSelectedIndex)
//   }

//   let { positionRef, preventLayoutShift } = usePreventLayoutShift()

//   return {
//     as: 'div',
//     ref: positionRef,
//     selectedIndex,
//     onChange: (newSelectedIndex) => {
//       preventLayoutShift(() =>
//         addPreferredLanguage(availableLanguages[newSelectedIndex])
//       )
//     },
//   }
// }

// const CodeGroupContext = createContext(false)

// /**
//  * CodeGroup: main container for code tabs or single code panel
//  */
// export function CodeGroup({ children, title, ...props }) {
//   let languages =
//     Children.map(children, (child) =>
//       getPanelTitle(isValidElement(child) ? child.props : {})
//     ) ?? []
//   let tabGroupProps = useTabGroupProps(languages)
//   let hasTabs = Children.count(children) > 1

//   let containerClassName =
//     'my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md ring-1 ring-white/10'
//   let header = (
//     <CodeGroupHeader title={title} selectedIndex={tabGroupProps.selectedIndex}>
//       {children}
//     </CodeGroupHeader>
//   )
//   let panels = <CodeGroupPanels {...props}>{children}</CodeGroupPanels>

//   return (
//     <CodeGroupContext.Provider value={true}>
//       {hasTabs ? (
//         <TabGroup {...tabGroupProps} className={containerClassName}>
//           <div className="not-prose">
//             {header}
//             {panels}
//           </div>
//         </TabGroup>
//       ) : (
//         <div className={containerClassName}>
//           <div className="not-prose">
//             {header}
//             {panels}
//           </div>
//         </div>
//       )}
//     </CodeGroupContext.Provider>
//   )
// }

// /**
//  * The <Code> component handles inline code or grouped code blocks
//  */
// export function Code({ children, ...props }) {
//   let isGrouped = useContext(CodeGroupContext)

//   if (isGrouped) {
//     if (typeof children !== 'string') {
//       throw new Error(
//         '`Code` children must be a string when nested inside a `CodeGroup`.'
//       )
//     }
//     return <code {...props} dangerouslySetInnerHTML={{ __html: children }} />
//   }

//   return <code {...props}>{children}</code>
// }

// /**
//  * The <Pre> wrapper auto-creates a CodeGroup for code blocks
//  */
// export function Pre({ children, ...props }) {
//   let isGrouped = useContext(CodeGroupContext)

//   if (isGrouped) {
//     return children
//   }

//   return <CodeGroup {...props}>{children}</CodeGroup>
// }