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
        inter: ['Inter', 'sans-serif'],
        bebas:['Bebas Neue', 'cursive']
      },
      colors:{
        basePurple:'#3629B7',
        baseGrey:"#838383",
        baseDarkerGrey:"#2c3e50",
        lightGreen:'#edffef',
        lightGreenText:"#55A55E",
        lightPurple:"#f4f2ff",
        lightPurpleText:"#5E5498",
        lightBrown:"#fff2ec",
        lightBrownText:"#9B715D",
        chartPurple:"#3629b7",
        chartPink:"#fbb8ff",
        chartRed:"#ff4267",
        fruitGreen:"#EDFFEF",
        fruitOrange:"#fff2ec",
        fruitPurple:"#f4f2ff",
        bottleBlue:"#1573FF",
        goalBlue:"#3546B1",
        drinkGrey:"#F7F9FD"
      }
    },
  },
  plugins: [],
}