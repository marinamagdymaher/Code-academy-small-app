/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      blue: {
        900: "#223b72",
        850: "#213b56", // color background
        400: "#38bdf8",
        300: "#1079EF",
        250: "#bccce1",
      },
      yellow:{300:"#ef8610"},
    },
  },
  plugins: [],
};
