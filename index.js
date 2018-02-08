var fs = require('fs');
var moment = require('moment');

// Generate version for theme-version.php for the assets
let someFile = './inc/theme-version.php';

fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  // Find the line where the version is at.
  let re = /define\( 'DX_ASSETS_VERSION', '*(.*?)' \);/g;
  let found = data.match(re);

  // This will get and increment the version
  currentVersion = parseInt(found[0].substring(39, found[0].length - 4));
  currentVersion++;

  let time = moment().format("YYYYMMDD");

  let themeVersionNumber = time + '-' + currentVersion;
  let themeVersionString = "define( 'DX_ASSETS_VERSION', '" + themeVersionNumber + "' );";

  let result = data.replace(/define\( 'DX_ASSETS_VERSION', '*(.*?)' \);/g, themeVersionString);

  fs.writeFile(someFile, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
