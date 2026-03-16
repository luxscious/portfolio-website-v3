const sections = [
  { id: "experience", label: "Experience" },
  { id: "research",   label: "Research"   },
  { id: "projects",   label: "Projects"   },
  { id: "education",  label: "Education"  },
  { id: "skills",     label: "Skills"     },
]

export default function ResumeSectionNav() {
  return (
    <div className="sticky top-16 z-40 w-full border-b border-white/10 bg-[#0a0507]/90 backdrop-blur-md">
      <div className="max-w-[1000px] mx-auto px-4 md:px-20 lg:px-0 h-10 flex items-center gap-8 overflow-x-auto scrollbar-none">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="shrink-0 text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-[#DB2777] transition-colors duration-150 cursor-pointer"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
