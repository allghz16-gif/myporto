/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#0B0D12",
          surface: "#12151C",
          surface2: "#171B24",
          border: "#232733",
        },
        ink: {
          DEFAULT: "#E9EAEE",
          muted: "#8A90A0",
          faint: "#565C6B",
        },
        flow: {
          DEFAULT: "#FF8A4C",
          soft: "#FFB98A",
        },
        signal: {
          DEFAULT: "#34D399",
          soft: "#7EE9C0",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(180deg, rgba(255,138,76,0.06) 0%, rgba(11,13,18,0) 60%)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 0.5, transform: "scale(0.8)" },
        },
        flowMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 -40px" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        pulseDot: "pulseDot 2s ease-in-out infinite",
        flowMove: "flowMove 1.2s linear infinite",
        gradientX: "gradientX 4s ease infinite",
        float: "float 4.5s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
}