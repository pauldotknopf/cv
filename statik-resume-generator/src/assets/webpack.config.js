const path = require('path');
var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var options = {
    minimize: false
};

module.exports = {
  mode: 'development',
  entry: {
      styles: './styles.scss',
      scripts: './scripts.js'
  },
  output: {
    path: path.resolve(__dirname, '..', 'Resume', 'Resources', 'wwwroot', 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ]
      }
    ]
  }
};
