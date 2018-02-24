var path = require("path");
var webpack = require("webpack");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  },
  node: {
    fs: 'empty'
  },
  cache: true,
  devtool: "eval", //or cheap-module-eval-source-map
  entry: {
    app: path.join(__dirname, "client/app", "app.js")
  },
  output: {
    path: path.join(__dirname, "buildf"),
    filename: "ha.js",
    chunkFilename: "[name].js"
  },
  plugins: [
    //Typically you'd have plenty of other plugins here as well
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, "client"),
      manifest: require("./build/vendor-manifest.json")
    }),
  ],
  module: {
    rules: [{
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            options: {
                includePaths: ["node_modules/bourbon/app/assets/stylesheets"]
            }
        }]
    }]
}
};
