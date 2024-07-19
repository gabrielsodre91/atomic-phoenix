const fs = require('fs');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

fs.readFile('src/tailwind.css', (err, css) => {
  if (err) throw err;

  postcss([tailwindcss, autoprefixer])
    .process(css, { from: 'src/tailwind.css', to: 'dist/tailwind.css' })
    .then(result => {
      fs.writeFile('dist/tailwind.css', result.css, () => true);
      if (result.map) {
        fs.writeFile('dist/tailwind.css.map', result.map.toString(), () => true);
      }
    });
});
