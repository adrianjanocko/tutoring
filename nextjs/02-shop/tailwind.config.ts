import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#131118",
        },
        grey: {
          DEFAULT: "#A4A1AA",
          light: "#f3f3f3",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
