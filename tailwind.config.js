/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B4C3F', // Dark green
          light: '#3A6351',   // Light green
        },
        secondary: {
          DEFAULT: '#D4B996', // Tan
          light: '#E6CCAF',   // Light tan
        },
      },
    },
  },
  plugins: [],
} 