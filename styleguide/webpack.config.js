var pjson = require('../package.json');
const path = require('path');

module.exports = {
  sections: [
    {
      name: 'Getting Started',
      content: '../README.md'
    },
    {
      name: 'Components',
      components: '../src/components/**/*.jsx',
    }
  ],
  // components: 'src/components/**/[A-Z]*.jsx',
    // module: {
  //   rules: [
  //     {
  //       test: /\.(js|jsx)$/,
  //       exclude: /node_modules/,
  //       use: {
  //         loader: "babel-loader"
  //       }
  //     }
  //   ]
  // }
  title: 'NURVUS UI',
  version: pjson.version,
  // Where to build Styleguide
  styleguideDir: './build',
  moduleAliases: {
    '@nurvus/ui': path.resolve(__dirname, '../src/index.js')
  }
};