/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js", "./*.html", "./*.js"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
      },
      colors: {
        bgPrimary: "#FDF2D0",
        bgSecondary: "#8B5E3C",
        bgAccent: "#4A9660",
        bgDark: "#121212",
        bgLight: "#F9F9F9",
        bgGray: "#6B6B6B",
        txtPrimary: "#121212",
        txtLight: "#F9F9F9",
        txtAccent: "#8B5E3C",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
