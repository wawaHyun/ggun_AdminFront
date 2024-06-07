import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "bg_img": "url('https://img.freepik.com/premium-photo/abstract-forex-chart-with-candlestick-graph-index-tech-hologram-blurry-bright-city-background-trade-stock-finance-concept-double-exposure_670147-11705.jpg?w=996')",

      },
      colors: {
        gguntheme: {
          110: "#FFF5E0",
          120: "#FF6969",
          130: "#C70039",
          140: "#141E46",

          210 : "#FF204E",
          220 : "#A0153E",
          230 : "#5D0E41",
          240 : "#00224D",
        },
      },  
      
    },
  },
  plugins: [],
};
export default config;
