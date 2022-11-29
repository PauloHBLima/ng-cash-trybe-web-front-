/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
       preto: {
        'transparente': 'rgba(0, 0, 0, 0.4)'
       } 
      }
    },
  },
  plugins: [],
}
