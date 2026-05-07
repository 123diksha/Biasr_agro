/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        agroGreen: "#064E2E",
        agroGreenDark: "#022C1A",
        agroGold: "#D6A84F",
        agroLight: "#F5FAF3",
        soil: "#6B3F1D",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};