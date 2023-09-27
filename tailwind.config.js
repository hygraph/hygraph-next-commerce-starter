/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      colors: {
        'indigo-600': 'rgb(102,99,253)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

  ],
}
