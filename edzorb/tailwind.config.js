/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customWhite: "#f7f9f9",
        customBlue:"#c2cae8",
      }
    },
  },
  plugins: [],
}