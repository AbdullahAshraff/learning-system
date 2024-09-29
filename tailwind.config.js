/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGold: '#DEB041',
        customBronze: '#998443',
      },
    },
  },
  plugins: [],
}

