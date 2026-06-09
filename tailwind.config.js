/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Surface
        "surface-dim": "#ddd6f1",
        "surface-container-low": "#f7f1ff",
        "surface-container": "#f1ebff",
        "surface-container-high": "#ebe5ff",
        "surface-container-highest": "#e6dffa",
        "surface-variant": "#e6dffa",
        "surface-bright": "#fdf8ff",
        // On-surface
        "on-surface": "#1c192c",
        "on-surface-variant": "#494551",
        "inverse-on-surface": "#f4eeff",
        "inverse-surface": "#312e42",
        // Outline
        "outline": "#7a7583",
        "outline-variant": "#cbc4d3",
        // Primary
        "primary": "#432587",
        "on-primary": "#ffffff",
        "primary-container": "#5b3fa0",
        "on-primary-container": "#cebaff",
        "primary-fixed": "#e9ddff",
        "primary-fixed-dim": "#d0bcff",
        "inverse-primary": "#d0bcff",
        // Secondary
        "secondary": "#5e5d65",
        "on-secondary": "#ffffff",
        "secondary-container": "#e4e1ea",
        "secondary-fixed": "#e4e1ea",
        "secondary-fixed-dim": "#c8c5ce",
        // Tertiary
        "tertiary": "#4e3700",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#6b4d00",
        "on-tertiary-container": "#f9bb26",
        "tertiary-fixed": "#ffdea3",
        "tertiary-fixed-dim": "#fbbc28",
        // Error
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        // Background
        "background": "#fdf8ff",
        "on-background": "#1c192c",
        // Custom
        "lilac-soft": "#F4F1FA",
        "ink": "#1E1B2E",
        "action-purple": "#5B3FA0",
        "accent-gold": "#E0A500",
        "surface-tint": "#684dae",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        full: "9999px",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["56px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg-mobile": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-lg": ["40px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-md": ["28px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["20px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-md": ["16px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
      },
      spacing: {
        "section-desktop": "120px",
        "section-mobile": "64px",
        "container-max": "1200px",
        "gutter": "32px",
      },
      maxWidth: {
        "container": "1200px",
      },
    },
  },
  plugins: [],
};
