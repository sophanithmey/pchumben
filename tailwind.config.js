/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lotus: {
          50: '#fdf4f6',
          100: '#fce7eb',
          200: '#f9d2dc',
          300: '#f4adc0',
          400: '#ea7c9b',
          500: '#dc5078',
          600: '#c5345d',
          700: '#a52549',
          800: '#89223e',
          900: '#732138',
        },
        gold: {
          50: '#fdfbe8',
          100: '#fbf7c3',
          200: '#f7ee8c',
          300: '#f1de4d',
          400: '#eac920',
          500: '#cfa90f',
          600: '#ab810b',
          700: '#895e0c',
          800: '#724b11',
          900: '#623e13',
        },
        warmth: {
          50: '#faf7f2',
          100: '#f4ede2',
          200: '#e8dbca',
          300: '#d7c2a9',
          400: '#c2a384',
          500: '#ad8766',
          600: '#9b7156',
          700: '#815c48',
          800: '#6a4d3f',
          900: '#574136',
          950: '#2e211b',
        },
      },
      fontFamily: {
        khmer: ['"Kantumruy Pro"', '"Battambang"', '"Siemreap"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', '"Kantumruy Pro"', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
