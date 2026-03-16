/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#DB2777",
        "bg-dark": "#0a0507",
        "bg-light": "#fff5f8",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        pixel: ["'Press Start 2P'", "cursive"],
      },
      animation: {
        "star-pulse": "starPulse 4s infinite steps(2)",
        "star-pulse-slow": "starPulse 6s infinite steps(2) reverse",
        "bounce-slow": "bounce 2s infinite",
        ping: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        starPulse: {
          "0%, 100%": { opacity: "0.1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.01)" },
        },
      },
      boxShadow: {
        "pink-glow": "0 0 15px rgba(255, 45, 120, 0.3)",
        "pink-glow-lg": "0 0 30px rgba(255, 45, 120, 0.4)",
      },
      textShadow: {
        pink: "0 0 20px rgba(255, 45, 120, 0.4)",
      },
    },
  },
  plugins: [],
}
