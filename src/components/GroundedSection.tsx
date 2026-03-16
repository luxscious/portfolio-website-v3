import { Layers, Brain } from "lucide-react"

const features = [
  {
    icon: <Layers size={18} />,
    title: "Full Stack Capability",
    body: "Managing everything from complex database schemas to micro-interactions on the frontend.",
  },
  {
    icon: <Brain size={18} />,
    title: "AI-First Mindset",
    body: "Using large language models and generative AI to accelerate development cycles and squash bugs before they reach production.",
  },
]

export default function GroundedSection() {
  return (
    <section id="contact" className="bg-[#c9506c] relative pt-12 pb-4 overflow-hidden">

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-20">

        {/* Left — portrait photo */}
        <div className="order-2 md:order-1 flex justify-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-[#DB2777]/20 rounded-full blur-2xl" />
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
              <img
                src="/openfeature.jpeg"
                alt="Gabriella Gerges"
                loading="lazy"
                className="w-full h-full object-cover scale-[1.15]"
                style={{ objectPosition: "68% 18%" }}
              />
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div className="order-1 md:order-2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-[#4d0f26] leading-tight">
            Grounded in Excellence
          </h2>
          <p className="text-[#5c1a35] text-lg font-medium leading-relaxed">
            Creativity requires a solid foundation. I specialize in bringing high-level design
            concepts to life — transforming complex visuals into performant, accessible, and
            grounded code that stands the test of user interaction.
          </p>
          <div className="space-y-4">
            {features.map(({ icon, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="size-10 shrink-0 bg-[#4d0f26] text-white rounded-lg flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <h4 className="font-bold text-[#4d0f26]">{title}</h4>
                  <p className="text-[#5c1a35]/80 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
