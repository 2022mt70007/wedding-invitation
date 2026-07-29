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
          DEFAULT: "#FFF9F2",
          soft: "#F7F0E6",
          deep: "#EDE4D4",
        },
        /* Deep Temple Red */
        temple: {
          DEFAULT: "#7B1E1E",
          soft: "#9A3434",
          deep: "#5B0F0F",
          mist: "#F5E8E4",
        },
        burgundy: {
          DEFAULT: "#7B1E1E",
          soft: "#9A3434",
          deep: "#5B0F0F",
          rich: "#6A1616",
          mist: "#F5E8E4",
        },
        /* Antique Gold */
        gold: {
          DEFAULT: "#C9A227",
          light: "#DBB84A",
          pale: "#E8D080",
          deep: "#A8841A",
          shimmer: "#F0DC90",
        },
        /* Dark Brown text */
        ink: {
          DEFAULT: "#2E1A12",
          soft: "#5C3D30",
          muted: "#8A6A58",
          faint: "#B89A88",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        script: ["var(--font-script)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(123,30,30,0.06) 0%, transparent 55%), linear-gradient(180deg, #FFF9F2 0%, #F7F0E6 55%, #F5E8E4 100%)",
        "section-glow":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,162,39,0.12) 0%, transparent 60%)",
        "royal-veil":
          "linear-gradient(180deg, rgba(91,15,15,0.78) 0%, rgba(123,30,30,0.55) 42%, #FFF9F2 100%)",
        "gold-line":
          "linear-gradient(90deg, transparent, #C9A227, transparent)",
        "gold-foil":
          "linear-gradient(115deg, #A8841A 0%, #E8D080 28%, #C9A227 48%, #F0DC90 65%, #DBB84A 82%, #A8841A 100%)",
        glass:
          "linear-gradient(160deg, rgba(255,249,242,0.96) 0%, rgba(247,240,230,0.88) 100%)",
        "wood-grain":
          "repeating-linear-gradient(90deg, rgba(46,26,18,0.015) 0 1px, transparent 1px 12px), repeating-linear-gradient(0deg, rgba(123,30,30,0.02) 0 1px, transparent 1px 18px)",
        "temple-motif":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 4 L34 14 L44 14 L36 20 L39 30 L30 24 L21 30 L24 20 L16 14 L26 14 Z' fill='%23C9A227' fill-opacity='0.06'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass: "0 12px 40px rgba(91, 15, 15, 0.08)",
        soft: "0 6px 24px rgba(46, 26, 18, 0.06)",
        gold: "0 8px 28px rgba(201, 162, 39, 0.28)",
        temple: "0 16px 48px rgba(91, 15, 15, 0.14)",
        card: "0 4px 6px rgba(46, 26, 18, 0.03), 0 18px 42px rgba(91, 15, 15, 0.09)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        "foil-shine": "foilShine 5s linear infinite",
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
      },
    },
  },
  plugins: [],
};

export default config;
