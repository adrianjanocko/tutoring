/** @type {import('tailwindcss').Config} */
module.exports = {
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
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        purple: {
          DEFAULT: "#3629B7",
          light: "#f4f2ff",
          text: "#5E5498",
          chart: "#3629b7",
          fruit: "#F4F2FF",
        },
        grey: {
          DEFAULT: "#838383",
          darker: "#2c3e50",
          drink: "#F7F9FD",
        },
        green: {
          DEFAULT: "#55A55E",
          light: "#edffef",
          fruit: "#EDFFEF",
        },
        brown: {
          DEFAULT: "#9B715D",
          light: "#fff2ec",
        },
        blue: {
          bottle: "#1573FF",
          goal: "#3546B1",
        },
        chart: {
          pink: "#fbb8ff",
          red: "#ff4267",
        },
      },
    },
  },
  plugins: [],
};
