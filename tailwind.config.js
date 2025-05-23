/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spy-dark': '#1a1a1a',
        'spy-accent': '#d4af37',
        'folder-brown': '#8b4513',
      },
      fontFamily: {
        'goldeneye': ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
} 