const CleanCSS = require('clean-css');
const fs = require('fs');

const style = 'stylesheet.css';
const outputPath = 'min.stylesheet.css';
/* compile scss files */
// you need to set 'filename' to a string of the path to your main scss file

fs.readFile(style, function (err, data) {
  if (err) {
    console.log(err);
    return;
  }
  const output = new CleanCSS({}).minify(data);
  const cssEncodingDirective = '@charset "UTF-8";';
  const minStyle = output.styles.replace(cssEncodingDirective, '');
  fs.writeFile(outputPath, minStyle, function (err) {
    if (err) {
      console.log(err);
    }
  });
});
