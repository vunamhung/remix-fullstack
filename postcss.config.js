module.exports = {
  plugins: [
    require('postcss-import-ext-glob'),
    require('postcss-import'),
    require('postcss-inline-svg'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
  ],
};
