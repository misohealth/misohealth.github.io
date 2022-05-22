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
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}