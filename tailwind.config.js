/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        'midnight-green': '#093A3E',
        'dark-spring-green': '#30734C',
        'antiflash-white': '#E6ECEF',
        'dark-purple': '#1C0B19',
        'pistachio': '#9FD586',
        'zomp': '#74AA94',
        'pigment-green': '#479A4B',
        'mantis': '#65B869',
      },
    },
  },
  plugins: [],
}

