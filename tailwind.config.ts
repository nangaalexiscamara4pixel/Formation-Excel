import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#EEF6F1",
          100: "#D8ECDF",
          200: "#B0D9C0",
          300: "#7FBE99",
          400: "#4A9E71",
          500: "#0B6E4F",
          600: "#095E43",
          700: "#084A36",
          800: "#073D2C",
          900: "#052A1F",
        },
        sand: {
          100: "#F6EFDD",
          200: "#EBDDB6",
          300: "#DCC58A",
          400: "#C8A85C",
          500: "#B08F42",
          600: "#8C7134",
          700: "#5C4820",
        },
        paper: "#F7F8F6",
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
          "linear-gradient(to right, rgba(7,58,44,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(7,58,44,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        cell: "40px 40px",
      },
    },
  },
  plugins: [],
};

export default config;
