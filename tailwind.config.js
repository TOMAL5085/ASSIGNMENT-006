import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6f1ff',
          100: '#efe6ff',
          200: '#dfccff',
          300: '#c4a6ff',
          400: '#a476ff',
          500: '#8b4cff',
          600: '#7a32f2',
          700: '#6826cd',
          800: '#541fa5',
          900: '#451a85',
        },
      },
      boxShadow: {
        soft: '0 14px 30px -18px rgba(16, 24, 40, 0.35)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],
  },
}
