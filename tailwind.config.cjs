/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          100: "#dcffec",
          200: "#b9ffd9",
          300: "#97ffc6",
          400: "#74ffb3",
          500: "#51ffa0",
          600: "#41cc80",
          700: "#319960",
          800: "#206640",
          900: "#103320",
        },
      },
    },
  },
  plugins: [],
};
