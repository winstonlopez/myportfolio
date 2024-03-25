/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stick: ["Stick"],
        Inter: ["Inter"]
      },
      colors: {
        primary: '#CCD6F6',
        secondary: '#53D3B9',
        third: {
          100: '#8892B0',
          200: '#888888'
        },
        menu: "#112240"
      }
    },
  },
  plugins: [],
}

