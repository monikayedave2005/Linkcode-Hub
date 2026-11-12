/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linkcode: {
          blue: '#0093E9',    // Exact sky blue from the logo
          green: '#7D9C3A',   // Exact olive green from the logo
          dark: '#1e293b',    // For dark text
          light: '#f8fafc',   // Light background
        },
      },
    },
  },
  plugins: [],
}