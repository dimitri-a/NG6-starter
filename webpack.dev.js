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
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        include: [
          path.join(__dirname, "client") //important for performance!
        ],
        target:'node',
        externals:[nodeExternals()],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        query: {
          cacheDirectory: true, //important for performance
          plugins: ["transform-regenerator"],
          presets: ["es2015", "stage-0"]
        }
      },

      { test: /\.(scss|sass)$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'css-loader' }
    ]
  },
  resolve: {
    extensions: [".js"]
  }
};
