/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: '#171717',
        magenta: {
          glow: '#C71BFF',
          dark: '#8A0FB5',
          violet: '#7B2FF7',
        },
        slateText: {
          main: '#FFFFFF',
          muted: '#B8B8C7',
        },
        brand: {
          blue: '#7B2FF7',
          electric: '#C71BFF',
          purple: '#8A0FB5',
          violet: '#7B2FF7',
          dark: '#171717',
          darkCard: 'rgba(255, 255, 255, 0.06)',
          lightCard: 'rgba(255, 255, 255, 0.08)',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(199, 27, 255, 0.3)' },
          '100%': { boxShadow: '0 0 35px rgba(199, 27, 255, 0.7)' },
        }
      }
    },
  },
  plugins: [],
}
