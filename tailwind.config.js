/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        doulaise: ['"Newsreader"', "normal"],
      },
    },
    screens: { md: "768px" },
  },
  plugins: [],
};
