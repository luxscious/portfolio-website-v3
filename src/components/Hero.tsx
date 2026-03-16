import { ChevronDown } from "lucide-react"
import TransitionLink from "./TransitionLink"
import { useModal } from "../context/ModalContext"

export default function Hero() {
  const { open } = useModal()
  return (
    <section
      id="hero"
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DB2777]/10 border border-[#DB2777]/20 text-[#DB2777] text-xs font-bold uppercase tracking-widest mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DB2777] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DB2777]" />
          </span>
          Available for New Missions
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tighter pink-glow">
          Gabriella Gerges:
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DB2777] to-pink-300">
            Crafting Pixel-Perfect
            <br />
            Digital Experiences
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Full Stack Software Engineer specializing in intuitive user
          interfaces, high-fidelity design implementation, and AI-accelerated
          development.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <TransitionLink
            to="/resume"
            className="w-full sm:w-auto px-8 py-4 bg-[#DB2777] text-white font-bold rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg shadow-[#DB2777]/25 cursor-pointer text-center"
            aria-label="View portfolio"
          >
            View Portfolio
          </TransitionLink>
          <button
            onClick={open}
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-200 cursor-pointer"
            aria-label="Contact me"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-16 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
          Descent
        </span>
        <ChevronDown
          className="text-[#DB2777] animate-bounce"
          size={20}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
