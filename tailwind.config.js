/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      '4xl' : '2400px'
    },
    extend: {
      fontFamily: {
        'cinzel': ['cinzel'] 
      },
    },
  },
  plugins: [require("tailwindcss-animate"),],
}
