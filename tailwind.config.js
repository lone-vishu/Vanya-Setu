/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: '#171310',
          card: '#1E1812',
          cardLight: '#241D15',
          textMain: '#F1E8D6',
          textMuted: '#B7AB92',
          accent: '#C9832F',
          accentSoft: '#E0A75C',
          rust: '#A34331',
          safe: '#4C7261',
          border: '#463B2C'
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'serif'],
        sans: ['Work Sans', 'sans-serif'],
      },
      backgroundImage: {
        'sohrai-pattern': 'radial-gradient(#B7AB92 2px, transparent 2px)'
      },
      backgroundSize: {
        'sohrai': '20px 20px'
      }
    },
  },
  plugins: [],
}