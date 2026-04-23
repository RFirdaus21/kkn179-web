

const withMT = require("@material-tailwind/react/utils/withMT");
const { default: tailwindcss } = require("@tailwindcss/vite");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});