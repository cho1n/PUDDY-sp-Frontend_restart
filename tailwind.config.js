/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fontGreen: "#0F940D",
        fontRed: "#FF0000",
        fontGray: "#6F6D6D",
        fontBlack: "#000000",
        fontWhite: "#FFFFFF",
      },
      backgroundColor: {
        bgYellow: "#FFDD2E",
        bgRed: "#FF3131",
        bgGray: "#E6E0E9",
        bgBlack: "#000000",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        bigTitle: "22px",
        middleTitle: "28px",
        defalut: "14px",
        buttonFont: "20px",
        smallTitle: "14px",
      },
      
    },
  },
  plugins: [],
};
