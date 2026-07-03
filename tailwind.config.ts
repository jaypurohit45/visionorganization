import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./lib/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "Inter", "sans-serif"]
      },
      colors: {
        ink: "#05070d",
        night: "#07111f",
        electric: "#149cff",
        cyan: "#22d3ee",
        royal: "#2557ff"
      },
      boxShadow: {
        glow: "0 0 80px rgba(20,156,255,.25)",
        card: "0 24px 80px rgba(0,0,0,.35)"
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-16px)" } },
        shimmer: { from: { backgroundPosition: "0% 50%" }, to: { backgroundPosition: "100% 50%" } }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite alternate"
      }
    }
  },
  plugins: []
};

export default config;
