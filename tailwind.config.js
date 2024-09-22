/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Gilroy": ["Gilroy", "sans-serif"],
        "LTSuperior": ["LT Superior", "sans-serif"],
        "RobotoMono": ["Roboto Mono", "sans-serif"],
      },
      colors: {
        "dark": "#0E0C0F",
        "lightGreen": "#12F287",
      },
    },
  },
  extend: {},
  plugins: [],
};
