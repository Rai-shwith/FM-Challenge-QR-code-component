/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      width: {
        '340': '340px', // add this line
      },
    },
  },
  plugins: [],
}