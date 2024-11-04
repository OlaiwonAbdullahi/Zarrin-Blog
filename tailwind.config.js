/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        secondary: "#7C4EE4",
        primary: "#666666",
        primary1: "#999999",
        text: "#333333",
        bg: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
