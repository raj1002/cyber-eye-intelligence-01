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
        lineSoft: "#1F1F22",
        mute: "#A1A1AA",
        stone: "#71717A",
        accent: {
          DEFAULT: "#10B981",
          dim: "#0A6E51",
          soft: "#063D2D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        grotesk: ["var(--font-grotesk)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        card: "12px",
        control: "9999px",
        xl: "16px",
        xxl: "24px",
        pill: "9999px",
      },
      maxWidth: {
        page: "1440px",
      },
      animation: {
        marquee: "marq 50s linear infinite",
        voiceDrift: "voiceDrift 80s linear infinite",
        floaty: "floaty 9s ease-in-out infinite",
        ping: "ping 2s ease-out infinite",
      },
      keyframes: {
        marq: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        voiceDrift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        ping: {
          "0%": { boxShadow: "0 0 0 0 rgba(16,185,129,0.5)" },
          "70%": { boxShadow: "0 0 0 6px rgba(16,185,129,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(16,185,129,0)" },
        },
        blink: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
