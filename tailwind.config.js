/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*/*.html",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#e0cec7",
        secondary: "#977669",
        abc: "#F4F5F7",
      },
      fontSize: {
        h2: ["48px", "64px"],
        lead1: ["18px", "32px"],
        lead2: ["18px", "32px"],
        body: ["16px", "26px"],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

