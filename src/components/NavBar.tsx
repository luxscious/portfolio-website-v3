import { useLocation } from "react-router-dom"
import { Briefcase } from "lucide-react"
import TransitionLink from "./TransitionLink"
import { useModal } from "../context/ModalContext"

export default function NavBar() {
  const { pathname } = useLocation()
  const isResume = pathname === "/resume"
  const { open } = useModal()

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a0507]/80 backdrop-blur-md" style={{ viewTransitionName: "navbar" }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo — always goes home */}
        <TransitionLink to="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="size-8 rounded bg-white/10 flex items-center justify-center overflow-hidden group-hover:bg-white/20 transition-colors duration-150">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Gabriella Gerges logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#DB2777] transition-colors duration-150">
            Gabriella Gerges
          </span>
        </TransitionLink>

        {/* Spacer so right actions stay right on landing */}
        <div />

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <TransitionLink
            to="/resume"
            aria-label="Portfolio"
            className={`size-9 flex items-center justify-center rounded-lg border transition-all duration-150 cursor-pointer
              ${isResume
                ? "bg-[#DB2777]/20 border-[#DB2777]/50 text-[#DB2777]"
                : "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-[#DB2777]"
              }`}
          >
            <Briefcase size={16} />
          </TransitionLink>

          <button
            onClick={open}
            className="bg-[#DB2777] hover:bg-[#DB2777]/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all duration-200 shadow-[0_0_15px_rgba(219,39,119,0.3)] hover:shadow-[0_0_25px_rgba(219,39,119,0.5)] cursor-pointer"
            aria-label="Get in touch"
          >
            Let's Build
          </button>
        </div>

      </div>
    </header>
  )
}
