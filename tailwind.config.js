/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#f7f1ff",
        "outline-variant": "#cbc4d3",
        "tertiary-fixed-dim": "#fbbc28",
        "primary-fixed-dim": "#d0bcff",
        "surface-variant": "#e6dffa",
        "on-surface": "#1c192c",
        "surface-tint": "#684dae",
        "secondary": "#5e5d65",
        "inverse-primary": "#d0bcff",
        "surface-container-highest": "#e6dffa",
        "on-surface-variant": "#494551",
        "primary": "#432587",
        "error": "#ba1a1a",
        "surface-container-high": "#ebe5ff",
        "primary-container": "#5b3fa0",
        "on-primary-container": "#cebaff",
        "surface-container": "#f1ebff",
        "inverse-surface": "#312e42",
        "on-primary": "#ffffff",
        "outline": "#7a7583",
        "lilac-soft": "#F4F1FA",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
