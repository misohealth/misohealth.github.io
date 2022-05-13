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
      poppins: "poppins, open sans, sans-serif",
      firasans: "firasans, open sans, sans-serif"
    },
    colors: {
      'misobluedark': '#1836b2',
      'misobluelight': '#86c7ed',
      'misopurple': '#a066cb'
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}