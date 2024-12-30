import { HeaderRoot } from '@/components/HeaderRoot'
import '@/styles/tailwind.css'

export const metadata = { title: 'Landing Section' }

export default function LandingLayout({ children }) {
  // We *only* wrap children in a <div>, or add additional providers if needed
  return (
    <div className="landing-layout">
      <HeaderRoot />
      {children}
    </div>
  )
}