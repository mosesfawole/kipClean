/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#cc5500",
        secondary: "#fff4ec",
        dark: "##2F2F2F",
        ash: "#595f66",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
