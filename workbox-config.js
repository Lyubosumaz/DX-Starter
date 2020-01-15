// Move this file one folder up
module.exports = {
  "globDirectory": "dx-starter/assets",
  "globPatterns": [
    "**/*.{js,css}"
  ],
  "swDest": "dx-starter/sw.js",

  runtimeCaching: [{

    urlPattern: /\/wp-content\/.+/,

    handler: 'StaleWhileRevalidate',
  }],
};