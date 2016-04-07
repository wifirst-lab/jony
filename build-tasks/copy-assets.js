var path = require('path');
var fs = require('fs-extra');
var child_process = require('child_process');

var projectPath = path.dirname(__dirname);

var paths = {
  css: {
    src: path.join(projectPath, 'assets/stylesheets'),
    dest: path.join(projectPath, 'dist/css')
  },
  fonts: {
    src: path.join(projectPath, 'assets/fonts'),
    dest: path.join(projectPath, 'dist/fonts')
  },
  images: {
    src: path.join(projectPath, 'assets/images'),
    dest: path.join(projectPath, 'dist/images')
  }
};

['css', 'fonts', 'images'].forEach(function(d) {
  fs.copySync(paths[d].src, paths[d].dest);
});