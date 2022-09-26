/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#996E54",
      },
    },

    screens: {
      sm: { min: "360px", max: "767px" },
      lg: { min: "767px" },
    },
  },
  plugins: [],
};
