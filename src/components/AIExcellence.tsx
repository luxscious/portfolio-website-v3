import { Zap, Sparkles, Shield, Code2 } from "lucide-react"

const cards = [
  {
    icon: <Zap size={20} />,
    title: "Rapid Prototyping",
    body: "Turning complex ideas into functional code in record time using AI augmentation.",
  },
  {
    icon: <Sparkles size={20} />,
    title: "Zero Debt",
    body: "AI-assisted reviews catch issues early, keeping the codebase clean and maintainable.",
  },
  {
    icon: <Shield size={20} />,
    title: "Quality First",
    body: "Every line reviewed with precision — speed never comes at the cost of reliability.",
  },
  {
    icon: <Code2 size={20} />,
    title: "Full Stack",
    body: "From pixel-perfect UIs to robust backend systems, the whole stack covered.",
  },
]

export default function AIExcellence() {
  return (
    <section
      id="portfolio"
      className="gradient-transition min-h-dvh relative py-32"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: text + cards */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              AI-Accelerated Excellence
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              I leverage cutting-edge AI to prototype and ship at lightning
              speed, ensuring rapid delivery without ever compromising on code
              quality or accumulating technical debt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map(({ icon, title, body }) => (
              <div
                key={title}
                className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/15 transition-colors duration-200"
              >
                <div className="text-white mb-2">{icon}</div>
                <h4 className="font-bold text-white mb-1">{title}</h4>
                <p className="text-sm text-pink-100/80">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
            <img
              src="/pfp.jpeg"
              alt="Gabriella Gerges"
              className="w-full h-full object-cover scale-[1.15]"
              style={{ objectPosition: "50% 10%" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
