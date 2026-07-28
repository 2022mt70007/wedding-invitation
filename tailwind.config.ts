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
        /* Kasavu cream */
        ivory: {
          DEFAULT: "#FBF6EA",
          soft: "#F5EDD8",
          deep: "#EBE0C4",
        },
        /* Temple maroon / arakku */
        burgundy: {
          DEFAULT: "#8B1E2D",
          deep: "#4A0F18",
          rich: "#6B1522",
          soft: "#A83242",
          mist: "#F3E6E0",
        },
        cherry: {
          DEFAULT: "#B83345",
          deep: "#8E2433",
          soft: "#D45A68",
        },
        /* Kasavu gold */
        gold: {
          DEFAULT: "#C4A35A",
          light: "#DBC07A",
          pale: "#EFD9A0",
          deep: "#9A7A35",
          shimmer: "#F0D890",
        },
        /* Banana leaf green accent */
        leaf: {
          DEFAULT: "#3D5C3A",
          soft: "#5A7A52",
          mist: "#E8F0E4",
        },
        ink: {
          DEFAULT: "#2A1A14",
          soft: "#5C4038",
          muted: "#8A6E60",
          faint: "#B8A090",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(196,163,90,0.18) 0%, transparent 55%), linear-gradient(180deg, #FBF6EA 0%, #F5EDD8 50%, #F3E6E0 100%)",
        "section-glow":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(196,163,90,0.16) 0%, transparent 60%)",
        "royal-veil":
          "linear-gradient(180deg, rgba(74,15,24,0.72) 0%, rgba(139,30,45,0.5) 45%, #FBF6EA 100%)",
        "gold-line":
          "linear-gradient(90deg, transparent, #C4A35A, transparent)",
        "gold-foil":
          "linear-gradient(115deg, #9A7A35 0%, #EFD9A0 25%, #C4A35A 45%, #F5E6C0 60%, #DBC07A 80%, #9A7A35 100%)",
        "card-sheen":
          "linear-gradient(165deg, rgba(251,246,234,0.98) 0%, rgba(245,237,216,0.94) 100%)",
        kasavu:
          "repeating-linear-gradient(90deg, #C4A35A 0 2px, transparent 2px 10px)",
        glass:
          "linear-gradient(160deg, rgba(251,246,234,0.95) 0%, rgba(243,230,224,0.75) 100%)",
      },
      boxShadow: {
        glass: "0 12px 40px rgba(74, 15, 24, 0.08)",
        soft: "0 6px 24px rgba(74, 15, 24, 0.06)",
        gold: "0 8px 28px rgba(196, 163, 90, 0.3)",
        royal: "0 18px 48px rgba(74, 15, 24, 0.14)",
        seal: "0 10px 28px rgba(74, 15, 24, 0.35), inset 0 1px 0 rgba(239,217,160,0.35)",
        card: "0 4px 6px rgba(74, 15, 24, 0.03), 0 16px 40px rgba(74, 15, 24, 0.08)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        "foil-shine": "foilShine 5s linear infinite",
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
