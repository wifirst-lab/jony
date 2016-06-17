var args = require('./args.js');

module.exports = {
  parseArgs: args.parseArgs,
  expectedColors: args.expectedColors,
  copyAssets: require('./copy-assets.js'),
  buildJs: require('./build-js.js')
};