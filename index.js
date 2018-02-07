var fs = require('fs');
var moment = require('moment');

// Generate version for theme-version.php for the assets
let someFile = './inc/theme-version.php';

fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  let re = /define\( 'DX_ASSETS_VERSION', '*(.*?)' \);/g;
  let found = data.match(re);
  let currentVersion = found[0].substring(30, found[0].length - 4);
  let time = moment().format("Do-MMM-YYYY");

  let themeVersionNumber = parseInt(currentVersion) + 1 + '-' + time;
  let themeVersionString = "define( 'DX_ASSETS_VERSION', '" + themeVersionNumber + "' );";

  let result = data.replace(/define\( 'DX_ASSETS_VERSION', '*(.*?)' \);/g, themeVersionString);

  fs.writeFile(someFile, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
