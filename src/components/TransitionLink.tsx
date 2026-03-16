import { useNavigate } from "react-router-dom"

const ROUTE_ORDER: Record<string, number> = {
  "/": 0,
  "/resume": 1,
}

interface Props {
  to: string
  className?: string
  "aria-label"?: string
  children: React.ReactNode
}

export default function TransitionLink({ to, children, ...props }: Props) {
  const navigate = useNavigate()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    const current = ROUTE_ORDER[window.location.pathname] ?? 0
    const next = ROUTE_ORDER[to] ?? 0
    document.documentElement.dataset.navDir = next >= current ? "forward" : "back"

    if ("startViewTransition" in document) {
      (document as Document & { startViewTransition: (cb: () => void) => void })
        .startViewTransition(() => navigate(to))
    } else {
      navigate(to)
    }
  }

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  )
}
