/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
    extend: {
      colors: {
        primary: {
          800 : "#80b1b7",
          600: "##99d2d8",
          500: "#bde5ea"
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

