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

  const options = {
    level: {
      2: {
        mergeAdjacentRules: true, // controls adjacent rules merging; defaults to true
        mergeIntoShorthands: true, // controls merging properties into shorthands; defaults to true
        mergeMedia: true, // controls `@media` merging; defaults to true
        mergeNonAdjacentRules: true, // controls non-adjacent rule merging; defaults to true
        mergeSemantically: false, // controls semantic merging; defaults to false
        overrideProperties: true, // controls property overriding based on understandability; defaults to true
        removeEmpty: true, // controls removing empty rules and nested blocks; defaults to `true`
        reduceNonAdjacentRules: true, // controls non-adjacent rule reducing; defaults to true
        removeDuplicateFontRules: true, // controls duplicate `@font-face` removing; defaults to true
        removeDuplicateMediaBlocks: true, // controls duplicate `@media` removing; defaults to true
        removeDuplicateRules: true, // controls duplicate rules removing; defaults to true
        removeUnusedAtRules: false, // controls unused at rule removing; defaults to false (available since 4.1.0)
        restructureRules: false, // controls rule restructuring; defaults to false
        skipProperties: [], // controls which properties won't be optimized, defaults to `[]` which means all will be optimized (since 4.1.0)
      },
    },
  };

  const output = new CleanCSS(options).minify(data);
  const cssEncodingDirective = '@charset "UTF-8";';
  const minStyle = output.styles.replace(cssEncodingDirective, '');
  fs.writeFile(outputPath, minStyle, function (err) {
    if (err) {
      console.log(err);
    }
  });
});
