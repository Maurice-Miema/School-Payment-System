/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Roboto:  "Roboto",
      },

      gridTemplateColumns:{
        GridClient: "1.2fr 5fr",
        GridAdmin: "1.5fr 5fr",
        GridDash1: "5fr 2.2fr",
      },
    },
  },
  plugins: [
    // personalisation de scrollbar
    require('tailwind-scrollbar'),
  ],
}

