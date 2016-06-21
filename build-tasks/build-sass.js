var path = require('path');
var sass = require('node-sass');
var fs = require('fs');
var _ = require('lodash');
var helpers = require('./helpers');

var projectPath = path.dirname(__dirname);
var version = process.env.npm_package_version;
var appName = process.env.npm_package_name;

var sassColors = {
  'maincolor': '$main-color',
  'darkercolor': '$darker-color',
  'lightercolor': '$lighter-color',
  'sidebarcolor': '$sidebar-background-color'
}

var args = helpers.parseArgs(process.argv.slice(2));

if (!args['maincolor']) {
  throw 'Missing maincolor argument. Usage example : npm run build-color-cdn maincolor=#CCCCCC darkercolor=#000000  lightercolor=#FFFFFF  sidebarcolor=#EDEDED fileName=_name_';
}

if (!args['fileName']) {
  throw 'Missing fileName argument. Usage example : npm run build-color-cdn maincolor=#CCCCCC darkercolor=#000000  lightercolor=#FFFFFF  sidebarcolor=#EDEDED fileName=_name_';
}

var fileName = args['fileName'];
var config = {
  rootFile: path.join(projectPath, 'assets/stylesheets/jony.scss'),
  target: path.join(projectPath, 'dist/css/' + fileName + '.min.css')
};

var expectedColors = helpers.expectedColors;

var sassColorVars = (_.map(args, function(val, key) {
  if (expectedColors[key]) {
    return [sassColors[key], val].join(':');
  } else {
    return '';
  }
})).join('; ');

sass.render({
  data: sassColorVars + '\n @import  "' + config.rootFile + '";'
}, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    fs.writeFile(config.target, result.css, function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Done.');
      }
    });
  }
});