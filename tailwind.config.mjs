/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#fdf8f5",
        surface: "#ffffff",
        "surface-soft": "#f7f3ef",
        "surface-muted": "#f2ede9",
        "surface-line": "#e6e2de",
        ink: "#1c1b19",
        "ink-muted": "#625e55",
        "ink-soft": "#48473f",
        primary: "#605f54",
        "primary-strong": "#32302e",
        "primary-fog": "#ebe8da",
        "primary-ink": "#ffffff",
        accent: "#e8e2d0",
        "accent-strong": "#cbc6bb"
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        display: ['"Bricolage Grotesque"', "sans-serif"],
        label: ['"Geist"', "sans-serif"]
      }
    }
  },
  plugins: []
};
