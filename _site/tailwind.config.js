const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.html',
    './*.html',
    './*.md',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      monospace: "monospace, 'Courier'",
      dmsans: "dmsans, open sans, sans-serif",  /* Content */
      poppins: "poppins, open sans, sans-serif" /* Heading */
    },
    extend: {
      colors: {
        misolightblue: '#86C7ED',
        misopurple: '#A066CB',
        misodarkblue: '#1836B2',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}