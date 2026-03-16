import { Github, Linkedin, ExternalLink } from "lucide-react"

const links = [
  { label: "GitHub", href: "https://github.com/luxscious", icon: <Github size={16} /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gabriella-gerges/", icon: <Linkedin size={16} /> },
  { label: "Devpost", href: "https://devpost.com/luxscious", icon: <ExternalLink size={16} /> },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0507] py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-white font-bold tracking-tight">
            Gabriella Gerges
          </span>
          <p className="text-slate-500 text-sm">
            Full Stack Software Engineer · Halifax, NS
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {links.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-[#DB2777] transition-colors duration-150 text-sm cursor-pointer"
              aria-label={label}
            >
              {icon}
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>

        {/* Credit */}
        <p className="text-slate-600 text-xs text-center md:text-right">
          made by: Gabriella Gerges, 2026
        </p>
      </div>
    </footer>
  )
}
