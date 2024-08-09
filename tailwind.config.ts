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
        benner_img: "url('/imgs/stockBenner.jpg')",
      },
      colors: {
        pebble: {
          100: "#433E49",
          200: "#928490",
          300: "#DBC1AD",
          400: "#F3E8EB",
          500: "#872642",
          600: "#9F4298",
          //amver-400  rgb(251 191 36)
        },
      },
    },
  },
  plugins: [],
};

export default config;
