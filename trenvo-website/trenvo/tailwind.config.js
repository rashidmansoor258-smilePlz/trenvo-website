/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#061827',
        deepblue: '#0B2942',
        teal: {
          DEFAULT: '#19D3C5',
          soft: '#5FE6DA',
        },
        amber: {
          DEFAULT: '#FFB547',
          soft: '#FFCD7D',
        },
        soft: '#F7FAFC',
        muted: '#A8B5C2',
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          "linear-gradient(rgba(247,250,252,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(247,250,252,0.05) 1px, transparent 1px)",
        'teal-amber': 'linear-gradient(90deg, #19D3C5 0%, #FFB547 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(25, 211, 197, 0.35)',
        card: '0 20px 40px -20px rgba(2, 12, 22, 0.5)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};
