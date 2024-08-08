/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors: {
      "brand-color": "#0b0b11",
      "secondary-bg-color":"#222226",
      "secondary-border-color": "#313135",
      "brand-text-color": "#999999",
     },
    },
  },
  plugins: [],
};
