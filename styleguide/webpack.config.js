var package = require('../package.json');
const path = require('path');

module.exports = {
  theme: {
    fontFamily: {
      base: '"Inter", sans-serif'
    }
  },
  // Import Loaders, etc from base config
  webpackConfig: Object.assign({}, require('../webpack.config.js'), {
    /* Custom config options */
  }),
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
  require: [
    path.join(__dirname, './styles.scss')
  ],
  title: 'NURVUS UI',
  version: package.version,
  // Where to build Styleguide
  styleguideDir: './build',
  moduleAliases: {
    [package.name]: path.resolve(__dirname, '../src/index.js')
  }
};