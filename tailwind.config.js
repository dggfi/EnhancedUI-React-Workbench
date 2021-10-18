const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './templates/**/*.html',
    './src/**/*.tsx',
    './src/**/*.jsx',
    './examples/**/*.tsx',
    './examples/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWith: {
      '1/5': '10%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    minWidth: {
      '0': '0',
      '1/5': '20%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    textIndent: (theme, { negative }) => ({
      ...{
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
      },
      ...negative({
        sm: '2rem',
        md: '3rem',
        lg: '4rem',
      }),
    }),
    colors,
    extend: {},
  },
  variants: {
    extend: {},
    textIndent: ['responsive']
  },
  plugins: [
    require('tailwindcss-text-indent')()
  ],
  
}
