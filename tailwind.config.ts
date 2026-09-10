import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16231f",
        pine: "#17473a",
        moss: "#8e9f78",
        oat: "#f3efe6",
        cream: "#fbfaf6",
        sun: "#e8c96b",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      boxShadow: {
        soft: "0 24px 60px rgba(22,35,31,.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
