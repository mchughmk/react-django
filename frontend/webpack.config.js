var path = require("path")
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: './src/index.js', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "bundle.js",
  },

  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader'},
      { test: /\.css$/, use: ExtractTextPlugin.extract({
          use: 'css-loader'
      })}
    ],
  },

  plugins: [
      new ExtractTextPlugin('styles.css')
  ],

  resolve: {
    modules: ['node_modules'],
    extensions: ['.css', '.js', '.jsx']
  },

  watch: true,

  watchOptions: {
      ignored: /node_modules/,
      poll: 500
  }
}