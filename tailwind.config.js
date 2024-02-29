/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}","App.js"],
  theme: {
    extend: {},
  },
  extend: {
    fontFamily : {
      signature : ["Great Vibes"],
    }
  },
  plugins: [],
}



