import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FBF7F2",
          soft: "#F7F0E8",
          deep: "#EFE6DA",
        },
        blush: {
          DEFAULT: "#E8D5D0",
          soft: "#F3E6E2",
          deep: "#D4B8B0",
        },
        gold: {
          DEFAULT: "#B8956C",
          light: "#D4B896",
          pale: "#E8D5B7",
          deep: "#8C6B45",
          shimmer: "#C9A96E",
        },
        ink: {
          DEFAULT: "#2C2420",
          soft: "#5C524A",
          muted: "#8A7E74",
          faint: "#B5A99E",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(232,213,208,0.45) 0%, transparent 55%), linear-gradient(180deg, #FBF7F2 0%, #F3E6E2 45%, #EFE6DA 100%)",
        "section-glow":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(184,149,108,0.12) 0%, transparent 60%)",
        "gold-line":
          "linear-gradient(90deg, transparent, #B8956C, transparent)",
        glass:
          "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.2) 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(44, 36, 32, 0.08)",
        soft: "0 4px 24px rgba(44, 36, 32, 0.06)",
        gold: "0 4px 20px rgba(184, 149, 108, 0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
