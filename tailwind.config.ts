import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#E7F5EC",
          100: "#C9E9D5",
          200: "#98D3AE",
          300: "#5FB884",
          400: "#2E9C60",
          500: "#0F7A40",
          600: "#0C6635",
          700: "#0A522B",
          800: "#084122",
          900: "#06301A",
        },
        sand: {
          50: "#FFF8EC",
          100: "#FEEDCB",
          200: "#FCDA97",
          300: "#FAC468",
          400: "#F7B347",
          500: "#F5A524",
          600: "#D98A12",
          700: "#8F5709",
        },
        paper: "#F7F9F7",
        ink: {
          DEFAULT: "#16241D",
          soft: "#5B6B63",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(6,48,26,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,48,26,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        cell: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
