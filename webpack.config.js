const path = require("path");
const webpack = require("webpack");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  // the entry point of our app
  entry: "./src/index",

  output: {
    // the output bundle
    filename: "index.js",

    path: path.resolve(__dirname, "build/dist")
  },

  devtool: "inline-source-map",

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ["awesome-typescript-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors

    new CheckerPlugin(),

    new HtmlWebpackPlugin({
      template: "static/index.html"
    })
  ],

  devServer: {
    host: "0.0.0.0",
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true
    // enable HMR on the server
  }
};
