/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#F47857",
      secondary: "#aa482f",
      background: "#faf6eb",
      text: "#333",
    },
    extend: {},
    fontFamily: {
      body: ["Inter", "sans-serif"],
      header: ["Nanum Myeongjo", "serif"],
    },
  },
  plugins: [],
};
