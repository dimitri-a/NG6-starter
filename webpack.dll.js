var path = require("path");
var webpack = require("webpack");



module.exports = {
  entry: {
    dependencies: ["angular","lodash","style-loader","sass-loader","fs","fs-walk","node-sass","css-loader"]


  },
  node: {
    fs: 'empty'
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
