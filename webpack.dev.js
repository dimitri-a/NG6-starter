var path = require("path");
var webpack = require("webpack");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  cache: true,
  devtool: "eval", //or cheap-module-eval-source-map
  entry: {
    app: path.join(__dirname, "client/app", "app.js")
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "newapp.js",
    chunkFilename: "[name].js"
  },
  plugins: [
    //Typically you'd have plenty of other plugins here as well
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, "client"),
      manifest: require("./dll/vendor-manifest.json")
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        include: [
          path.join(__dirname, "client") //important for performance!
        ],
        query: {
          cacheDirectory: true, //important for performance
          plugins: ["transform-regenerator"],
          presets: ["es2015", "stage-0"]
        }
      },
      { test: /\.(scss|sass)$/, loader: 'style-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'css-loader' }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
};
