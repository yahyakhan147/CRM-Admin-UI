/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#022658',
        secondary: '#D3AF34',
        ink: "#12172B",
        surface: "#F7F8FA",
        panel: "#FFFFFF",
        slate: {
          650: "#475569",
        },
        signal: "#0EA5A3",
        amber: "#F59E0B",
        coral: "#EF6461",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(18, 23, 43, 0.06), 0 1px 8px rgba(18, 23, 43, 0.04)",
      },
    },
  },
  
  plugins: [require('@tailwindcss/typography')],
};
