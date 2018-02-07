var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    vendor: [
      "angular",
      "angular-ui-router",
      "fs",
      "normalize.css",
      "angular-mocks",
      "babel-core",
      "babel-loader",
      "babel-plugin-transform-runtime",
      "babel-polyfill",
      "babel-preset-es2015",
      "babel-preset-stage-0",
      "babel-register",
      "babel-runtime",
      "browser-sync",
      "chai",
      "connect-history-api-fallback",
      "css-loader",
      "del",
      "fs-walk",
      "gulp",
      "gulp-rename",
      "gulp-template",
      "gulp-util",
      "html-webpack-plugin",
      "lodash",
      "ng-annotate-loader",
      "node-libs-browser",
      "node-sass",
      "raw-loader",
      "run-sequence",
      "sass-loader",
      "style-loader",
      "supports-color",
      "webpack",
      "webpack-dev-middleware",
      "webpack-hot-middleware",
      "yargs"]
  },

  output: {
    filename: 'vendor.bundle.js',
    path: '/Users/dimitri/NG6-starter/build',
    library: 'vendor_lib',
  },
  plugins: [new webpack.DllPlugin({
    name: 'vendor_lib',
    path: 'build/vendor-manifest.json',
  })]
};
