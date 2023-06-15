/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        green:'#D2E9E9',
        dGreen:'#17594A',
      }
    },
  },
  plugins: [],
}

