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
        'folder-brown': '#e6d5b8',
        'folder-dark': '#b4a89a',
        'stamp-red': '#cc0000',
        'text-dark': '#333333',
        'bg-green': '#2f4f4f'
      },
      fontFamily: {
        'retro': ['"Press Start 2P"', 'cursive'],
      },
      backgroundImage: {
        'folder-texture': 'linear-gradient(45deg, rgba(0, 0, 0, 0.02) 25%, transparent 25%), linear-gradient(-45deg, rgba(0, 0, 0, 0.02) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.02) 75%), linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.02) 75%)',
      },
      backgroundSize: {
        'folder-pattern': '20px 20px',
      },
    },
  },
  plugins: [],
} 