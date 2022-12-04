/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": "poppins",
        "manrope": "manrope",
        "secondary": "zen dots",
      },
      colors: {
        "secondary": "#F8F9FD",
        "primary": "#EAE6FC",
        "cta": "#2C00D4"
      }
    },
  },
  plugins: [],
}
