/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        heroeau: ["heroeau","sans-serif"],
        against: ["against","sans"],
        montserrat: ["Montserrat", 'sans']
      }
    },
  },
  plugins: [],
}

