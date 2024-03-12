/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        quat: ["Quattrocento", "serif"],
        roboto:["Roboto Condensed", "sans-serif"],
        barlow:["Barlow", "sans-serif"],
        satisfy:["Satisfy", "cursive"],
      },
    },
  },
  plugins: [],
}

