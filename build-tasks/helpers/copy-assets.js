var path = require('path');
var fs = require('fs-extra');

function copyAssets(targetDir, projectPath, assets) {
  var paths = {
    css: {
      src: path.join(projectPath, 'assets/stylesheets'),
      dest: path.join(projectPath, targetDir, 'css')
    },
    fonts: {
      src: path.join(projectPath, 'assets/fonts'),
      dest: path.join(projectPath, targetDir, 'fonts')
    },
    images: {
      src: path.join(projectPath, 'assets/images'),
      dest: path.join(projectPath, targetDir, 'images')
    }
  };

  assets.forEach(function(d) {
    fs.copySync(paths[d].src, paths[d].dest);
  });
}

module.exports = copyAssets;