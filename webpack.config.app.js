// Configuration for Typescript Components

var webpack = require('webpack');
var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: {    
    app: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundled.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/, 
        loader: 'awesome-typescript-loader'
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