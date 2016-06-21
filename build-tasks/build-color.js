var path = require('path');
var fs = require('fs');
var childProcess = require('child_process');
var _ = require('lodash');
var helpers = require('./helpers');

var projectPath = path.dirname(__dirname);
var version = process.env.npm_package_version;
var appName = process.env.npm_package_name;

var args = helpers.parseArgs(process.argv.slice(2));

if (!args['maincolor']) {
  throw 'Missing maincolor argument. Usage example : npm run build-color maincolor=#CCCCCC darkercolor=#000000  lightercolor=#FFFFFF  sidebarcolor=#EDEDED';
}

var cssBuildFileName = appName + '-' + args['maincolor'].replace(/#/g, '');

var expectedColors = helpers.expectedColors;

var colorSassArgs = (_.map(args, function(val, key) {
  if (expectedColors[key]) {
    return [key, val].join('=');
  } else {
    return '';
  }
})).join(' ');

// console.log('npm run build-cdn && npm run build-sass-cdn ' + colorSassArgs + ' fileName=' + cssBuildFileName);
childProcess.execSync('npm run build && npm run build-sass ' + colorSassArgs + ' fileName=' + cssBuildFileName);