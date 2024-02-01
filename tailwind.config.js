/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fontGreen: "#0F940D",
        fontRed: "#FF0000",
        fontGray: "#CECECE",
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
        bgMyPageButton: "#CECECE",
        bgMyPageButton2: "#FFDD2E",
        bgYellowHover: "#F4D32F",
        bgWhiteHover: "#F7F7F7",
        bgGrayHover: "#BEBEBE",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        abee: ["ABeeZee", "sans-serif"],
      },
      fontSize: {
        bigTitle: "22px",
        middleTitle: "18px",
        defalut: "14px",
        buttonFont: "20px",
        smallFont: "12px",
        middleFont: "16px",
      },
      width: {
        359: "359px",
        393: "393px",
        30: "30px",
      },
      height: {
        donHave: "777px",
        haveHeader: "713px",
        haveHeaderAndFooter: "633px",
        110: "110px",
        340: "340px",
        580: "580px",
        43: "43px",
        30: "30px",
      },
      maxHeight: {
        donHave: "777px",
        haveHeader: "713px",
        haveHeaderAndFooter: "633px",
      },
      minHeight: {
        donHave: "777px",
        haveHeader: "713px",
        haveHeaderAndFooter: "633px",
      },
      borderRadius: {
        20: "20px",
        32: "32px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
