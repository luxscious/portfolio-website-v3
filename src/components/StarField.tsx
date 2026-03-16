import { useMemo } from "react"

interface Star {
  id: number
  top: string
  left: string
  size: number
  duration: number
  delay: number
  opacity: number
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 1.5 + 0.5,          // 0.5–2px
    duration: Math.random() * 4 + 2,           // 2–6s
    delay: Math.random() * 6,                  // 0–6s offset
    opacity: Math.random() * 0.5 + 0.3,        // peak 0.3–0.8
  }))
}

export default function StarField({ fixed = false }: { fixed?: boolean }) {
  const stars = useMemo(() => generateStars(140), [])

  return (
    <div
      className={`${fixed ? "fixed" : "absolute"} inset-0 overflow-hidden pointer-events-none z-[1]`}
      style={{ viewTransitionName: "starfield" }}
      aria-hidden="true"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animation: `twinkle ${star.duration}s ${star.delay}s ease-in-out infinite`,
            "--peak-opacity": star.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
