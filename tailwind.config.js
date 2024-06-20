/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pebble: {
          100: "#433E49",
          200: "#928490",
          300: "#DBC1AD",
          400: "#F3E8EB",
          500: "#872642",
          600: "#9F4298",
        },
      },
    },
    plugins: [],
  }
}
