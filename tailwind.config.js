/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        dark: {
          50: '#faf6f1',
          100: '#e8e6e0',
          200: '#ded9cf',
          300: '#d1c8ba',
          400: '#c2b8a7',
          500: '#b4a794',
          600: '#a69580',
          700: '#998873',
          800: '#8c7b66',
          900: '#6b5d4e',
          950: '#2c261f',
        },
      },
      fontFamily: {
        cursive: ['Dancing Script', 'cursive'],
        sans: ['Poppins', 'sans-serif'],
        display: ['Pacifico', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'glow': '0 0 15px rgba(161, 128, 114, 0.5)',
        'glow-lg': '0 0 25px rgba(161, 128, 114, 0.6)',
      },
    },
  },
  plugins: [],
};