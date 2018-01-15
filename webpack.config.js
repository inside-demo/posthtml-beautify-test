const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: './src/js/app.js',
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader?name=[name].[ext]',
          },
          {
            loader: 'posthtml-loader',
          },
        ],
      },
    ],
  }
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: './src/index.html',
  //   }),
  // ],
};

module.exports = config;
