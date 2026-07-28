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
          DEFAULT: "#FFFCFB",
          soft: "#F8F1EF",
          deep: "#EFE4E1",
        },
        burgundy: {
          DEFAULT: "#8B2332",
          deep: "#4E1520",
          rich: "#6A1A28",
          soft: "#A83345",
          mist: "#F5E8E6",
        },
        cherry: {
          DEFAULT: "#C23A4B",
          deep: "#9E2B3A",
          soft: "#D96876",
        },
        gold: {
          DEFAULT: "#C9A882",
          light: "#DCC4A4",
          pale: "#F0E4D2",
          deep: "#A07F55",
          shimmer: "#E6D0B0",
        },
        ink: {
          DEFAULT: "#3A1F24",
          soft: "#6B4A50",
          muted: "#94747A",
          faint: "#C9B0B4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,35,50,0.07) 0%, transparent 55%), linear-gradient(180deg, #FFFCFB 0%, #F8F1EF 55%, #F5E8E6 100%)",
        "section-glow":
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,130,0.14) 0%, transparent 60%)",
        "royal-veil":
          "linear-gradient(180deg, rgba(78,21,32,0.72) 0%, rgba(139,35,50,0.45) 45%, rgba(255,252,251,0.96) 100%)",
        "gold-line":
          "linear-gradient(90deg, transparent, #C9A882, transparent)",
        "gold-foil":
          "linear-gradient(115deg, #8A6B3D 0%, #E8D5B0 22%, #C9A882 40%, #F5E6C8 55%, #B8956C 72%, #F0E4D2 88%, #8A6B3D 100%)",
        "card-sheen":
          "linear-gradient(160deg, rgba(255,252,251,0.98) 0%, rgba(248,241,239,0.92) 55%, rgba(245,232,230,0.75) 100%)",
        glass:
          "linear-gradient(160deg, rgba(255,252,251,0.97) 0%, rgba(245,232,230,0.7) 100%)",
      },
      boxShadow: {
        glass: "0 10px 36px rgba(78, 21, 32, 0.07)",
        soft: "0 6px 24px rgba(78, 21, 32, 0.06)",
        gold: "0 8px 28px rgba(201, 168, 130, 0.28)",
        royal: "0 18px 50px rgba(78, 21, 32, 0.12)",
        seal: "0 10px 28px rgba(78, 21, 32, 0.32), inset 0 1px 0 rgba(240,228,210,0.35)",
        card: "0 4px 6px rgba(78, 21, 32, 0.02), 0 16px 40px rgba(78, 21, 32, 0.08)",
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
          "12%": { opacity: "0.45" },
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
