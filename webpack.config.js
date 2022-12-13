const HtmlWebpackPlugin = require('html-webpack-plugin');
const process = require('process');
const path = require('path');

const PROD = process.env.NODE_ENV === 'production';
const BE_URI = process.env.BE_URI || 'http://127.0.0.1:8085/';

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  mode: PROD ? 'production' : 'development',
  devtool: PROD ? undefined : 'inline-source-map',
  devServer: {
    proxy: {
      '/api': {
        target: BE_URI,
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        secure: false
      },
    },
  },
  output: {
    filename: 'index.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: '<html><body><div id="root"></body></html>'
    })
  ]
};
