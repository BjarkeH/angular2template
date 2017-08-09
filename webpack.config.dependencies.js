// Configuration for polyfills and vendors. 

var webpack = require('webpack');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {    
    polyfills: './src/polyfills.ts',
    vendors: './src/vendors.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundled.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/, 
        loader: 'ts-loader'
      }
    ]
  },    
  plugins: [
    new UglifyJSPlugin()
  ],
  resolve: {
    extensions: ['.js', '.ts']
  }
}