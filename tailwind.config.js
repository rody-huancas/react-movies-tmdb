/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131920",
        secondary: {
          100: "#d0d1d2",
          900: "#1b232d",
        },
      },
      width: {
        300: "300px",
      },
      padding: {
        300: "300px",
      },
    },
  },
  plugins: [],
};
