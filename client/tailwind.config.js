/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary-200" : "#e28743",
        "primary-100" : "#0d77ab",
        "secondary-200" : "#00cc99",
        "secondary-100" : "#0b1a78"
      }
    },
  },
  plugins: [],
}

