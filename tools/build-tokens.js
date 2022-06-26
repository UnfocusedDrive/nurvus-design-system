/**
 * Convert JSON Tokens to SCSS
 */
const fs = require('fs');
const path = require('path');
const varsFile = path.join(__dirname, '/vars.json');
const tokensFile = path.join(__dirname, '../src/styles/tokens.scss');

/**
 * Convert JSON to SCSS
 * @param {object} data - JSON Data
 * @returns {string} of SCSS variables
 */
function JSON2SCSS(data) {
  const parsed = JSON.parse(data);
  const string = Object.keys(parsed).map(key => {
    return `$${key}: ${parsed[key]};`;
  }).join('\n');

  return string;
}

/**
 * Read a file
 * @param {string} filePath - file path to read from
 * @returns {string} of file data
 */
const readFile = async filePath => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8')
    return data;
  }
  catch(err) {
    console.log(err)
  }
}

/**
 * Write a file
 * @param {object} data - file data to write from
 */
function writeFile(data) {
  fs.writeFile(tokensFile, data, function (err) {
    if (err) throw err;
    console.log('Tokens File created successfully.');
  })
}

/**
 * Execute
 * Read the variables JSON file and convert to SCSS file to ./styles dir
 */
readFile(varsFile).then(data => {
  writeFile(JSON2SCSS(data));
});
