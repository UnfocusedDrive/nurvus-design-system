const path = require('path');

module.exports = {
  // components: 'src/components/**/[A-Z]*.jsx',
  components: '../src/components/**/*.jsx',
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
  version: '0.0.0-alpha.0',
  // Where to build Styleguide
  styleguideDir: './build',
  moduleAliases: {
    '@nurvus/ui': path.resolve(__dirname, '../src/index.js')
  }
};