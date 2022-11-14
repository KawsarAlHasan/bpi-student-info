/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui')],
}
