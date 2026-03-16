import { useLocation } from "react-router-dom"
import { useRef } from "react"

// Define route order — higher index = further right
const ROUTE_ORDER: Record<string, number> = {
  "/": 0,
  "/resume": 1,
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const prevPathname = useRef<string>(pathname)

  const prev = ROUTE_ORDER[prevPathname.current] ?? 0
  const next = ROUTE_ORDER[pathname] ?? 0
  const direction = next >= prev ? "right" : "left"

  // Update ref after reading it
  prevPathname.current = pathname

  return (
    <div key={pathname} className={`page-enter-${direction}`}>
      {children}
    </div>
  )
}
