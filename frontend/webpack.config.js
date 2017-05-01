var path = require("path")
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = {
  context: __dirname,

  entry: './src/index.js',

  output: {
      path: path.resolve('./public/'),
      filename: "assets/js/bundle-[hash].js",
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
    new ExtractTextPlugin('assets/css/styles-[hash].css'),
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    }),
    new WebpackCleanupPlugin({
      exclude: ['favicon.ico'],
    })
  ],

  resolve: {
    modules: ['node_modules'],
    extensions: ['.css', '.js', '.jsx']
  }
};

if (process.env.NODE_ENV !== 'production') {
  module.exports['watch'] = true;
  module.exports['watchOptions'] = {
    ignored: /node_modules/,
    poll: 500
  };
}