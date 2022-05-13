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
      dmsans: "dmsans, open sans, sans-serif",
      poppins: "poppins, open sans, sans-serif"
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}