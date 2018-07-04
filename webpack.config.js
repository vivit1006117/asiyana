const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const DEBUG = !process.argv.includes('--development');

const config = {
  devtool: DEBUG ? 'eval-source-map' : false,
  entry: path.resolve(__dirname, 'src/js/index.js'),
  mode: DEBUG ? 'development' : 'production',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    }]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index-[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.template.html')
    }),
    new CleanWebpackPlugin([path.resolve(__dirname, 'build')])
  ]
};

module.exports = config;
