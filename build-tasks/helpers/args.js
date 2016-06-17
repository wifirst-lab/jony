var expectedColors = {
  'maincolor': true,
  'darkercolor': true,
  'lightercolor': true,
  'sidebarcolor': true
}

function parseArgs(args) {
  var o = {}
  args.forEach(function(arg) {
    var split = arg.split('=');
    o[split[0]] = split[1];
  })
  return o;
}

module.exports = {
  parseArgs: parseArgs,
  expectedColors: expectedColors
};