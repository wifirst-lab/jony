var path = require('path');
var fs = require('fs-extra');
var concat = require('concat');
var child_process = require('child_process');
var manifest = require('../manifest');

function buildJs(targetDir, projectPath) {
  var paths = {
    js: {
      pretty: path.join(projectPath, targetDir, 'js/jony.js'),
      ugly: path.join(projectPath, targetDir, 'js/jony.min.js')
    }
  };

  concat(manifest.js.files, paths.js.pretty, function(err) {
    if (err) {
      console.log(err);
      throw err;
    }
    uglify();
  });

  var uglify = function() {
    var command = "uglifyjs " + paths.js.pretty + " -o " + paths.js.ugly;
    console.log(command);
    child_process.exec(command, function(error, stdout, stderr) {
      if (error) {
        throw error;
      }
      if (stderr) {
        console.log("stderr : " + stderr);
        throw stderr;
      }
      fs.removeSync(paths.js.pretty);
      console.log('done');
    });
  };
}


module.exports = buildJs;