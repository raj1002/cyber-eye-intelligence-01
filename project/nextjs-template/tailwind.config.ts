import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        surface: "#18181B",
        surface2: "#27272A",
        line: "#2A2A2D",
        mute: "#A1A1AA",
        accent: {
          DEFAULT: "#10B981",
          dim: "#0A6E51",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        card: "8px",
        control: "8px",
        pill: "9999px",
      },
      maxWidth: {
        page: "1440px",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        ping: "ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
