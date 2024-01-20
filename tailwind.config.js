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
        fontYellow: "#FFDD2E",
      },
      backgroundColor: {
        bgYellow: "#FFDD2E",
        bgRed: "#FF3131",
        bgGray: "#E6E0E9",
        bgBlack: "#000000",
        bgWhite: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        bigTitle: "22px",
        middleTitle: "18px",
        defalut: "14px",
        buttonFont: "20px",
        smallFont: "12px",
      },
      height: {
        full: "777px",
        haveHeader: "713px",
        haveHeaderAndFooter: "633px",
        340: "340px",
      },
      maxHeight: {
        full: "777px",
        haveHeader: "713px",
        haveHeaderAndFooter: "633px",
      },
      minHeight: {
        full: "777px",
        haveHeader: "713px",
        haveHeaderAndFooter: "633px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
