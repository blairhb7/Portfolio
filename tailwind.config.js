/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '4xl' : '2008px'
      },
      fontFamily: {
        'cinzel': ['cinzel'] 
      },
    },
  },
  plugins: [require("tailwindcss-animate"),],
}
