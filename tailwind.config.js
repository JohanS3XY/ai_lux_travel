/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        champagne: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#e8dcc8',
          300: '#d4bc96',
          400: '#c4a777',
          500: '#b89560',
          600: '#a17d4d',
          700: '#846442',
          800: '#6e543a',
          900: '#5d4732',
        },
        luxury: {
          dark: '#0a0a0a',
          charcoal: '#1a1a1a',
          slate: '#2a2a2a',
          gold: '#d4af37',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
