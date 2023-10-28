/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/site/**/*.{html,js,njk}",
    './src/helpers/*.{html,js,njk}'
  ],
  theme: {
    extend: {
      screens: {
        'xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
    colors: {
      green: colors.green,
      sky: colors.sky,
      amber: colors.amber,
      'clay': {
        50: '#F6F6F4',
        100: '#E9E7E2',
        200: '#DCD9D1',
        300: '#CFCABF',
        400: '#B4AD9C',
        500: '#A79F8B',
        600: '#9A917A',
        700: '#8B826A',
        800: '#575142',
        900: '#464135',
        950: '#343128',
      },
      'moss-50': '#EEEEE8',
      'moss-100': '#DCDED0',
      'moss-200': '#CBCDB7',
      'moss-300': '#BABCA2',
      'moss-400': '#A9AC8B',
      'moss-500': '#989B74',
      'moss-600': '#828561',
      'moss-700': '#6A6D4C',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'sans': ['"Manrope"', 'sans-serif'],
      'serif': ['"Playfair Display"', 'Georgia', 'serif'],
      'mono': ['"DM Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      'condensed': ['"Archivo Narrow"', 'sans-serif'],
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}