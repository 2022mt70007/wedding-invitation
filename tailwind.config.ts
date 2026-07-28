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
        /* Champagne — light text/accents on deep red (replaces ivory surfaces) */
        ivory: {
          DEFAULT: "#F3E6D8",
          soft: "#E8D4C4",
          deep: "#D4B8A0",
        },
        burgundy: {
          DEFAULT: "#A12D3C",
          deep: "#1F080E",
          rich: "#4A121C",
          soft: "#D45A6A",
          mist: "#3A1018",
        },
        cherry: {
          DEFAULT: "#C23A4B",
          deep: "#8E2433",
          soft: "#E0707E",
        },
        gold: {
          DEFAULT: "#D4B896",
          light: "#E8D4B0",
          pale: "#F5E6D0",
          deep: "#B8956C",
          shimmer: "#F0E0C0",
        },
        /* Primary copy color on dark red = warm champagne */
        ink: {
          DEFAULT: "#F3E6D8",
          soft: "#E0C8B0",
          muted: "#C4A890",
          faint: "#9A7A68",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(194,58,75,0.25) 0%, transparent 55%), linear-gradient(180deg, #2A0A10 0%, #1F080E 100%)",
        "section-glow":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,184,150,0.12) 0%, transparent 60%)",
        "royal-veil":
          "linear-gradient(180deg, rgba(31,8,14,0.55) 0%, rgba(74,18,28,0.72) 50%, #1F080E 100%)",
        "gold-line":
          "linear-gradient(90deg, transparent, #D4B896, transparent)",
        "gold-foil":
          "linear-gradient(115deg, #8A6B3D 0%, #E8D5B0 22%, #D4B896 40%, #F5E6C8 55%, #B8956C 72%, #F0E4D2 88%, #8A6B3D 100%)",
        "card-sheen":
          "linear-gradient(165deg, rgba(90,28,40,0.95) 0%, rgba(50,14,22,0.92) 55%, rgba(40,12,18,0.88) 100%)",
        glass:
          "linear-gradient(165deg, rgba(90,28,40,0.9) 0%, rgba(45,12,20,0.85) 100%)",
      },
      boxShadow: {
        glass: "0 12px 40px rgba(0, 0, 0, 0.35)",
        soft: "0 6px 24px rgba(0, 0, 0, 0.25)",
        gold: "0 8px 28px rgba(212, 184, 150, 0.22)",
        royal: "0 18px 50px rgba(0, 0, 0, 0.4)",
        seal: "0 10px 28px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(240,228,210,0.3)",
        card: "0 4px 6px rgba(0, 0, 0, 0.15), 0 16px 40px rgba(0, 0, 0, 0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        "foil-shine": "foilShine 5s linear infinite",
        "petal-fall": "petalFall 14s linear infinite",
        "seal-press": "sealPress 0.9s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.65" },
          "50%": { opacity: "1" },
        },
        foilShine: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        petalFall: {
          "0%": {
            transform: "translateY(-10vh) rotate(0deg)",
            opacity: "0",
          },
          "12%": { opacity: "0.55" },
          "100%": {
            transform: "translateY(110vh) rotate(320deg)",
            opacity: "0",
          },
        },
        sealPress: {
          "0%": { transform: "scale(1.3)", opacity: "0" },
          "60%": { transform: "scale(0.96)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
