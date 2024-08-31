/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--tw-progress-width)' },
        },
      },
      colors: {
        secondary: "#adadcb",
        accentBlue: "#5e81f4",
        accentRed: "#ff808b",
        bgColor: "#f5f5fb",
        darkGray: "#746b76",
        darkBlue: "#4d4cac",
        grayieshBlue: "#9698d6",
      },
      animation: {
        grow: 'grow 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}