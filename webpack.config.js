const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

console.log('build------------')

module.exports = {
  entry: {
    app: './src/main.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
    // path 模块负责 检查并生成 目录
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    })
  ]
};
