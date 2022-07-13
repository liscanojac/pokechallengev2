/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pokedex' : ['DotGothic16'],
        'pokedex-title': ['VT323']
      }
    },
  },
  plugins: [],
}
