const path = require('path');
const webpack = require('webpack');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');

const config = {
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),
    mobile: path.resolve(__dirname, 'app/mobile.js'),
    // Since react is installed as a node module, node_modules/react,
    // we can point to it directly, just like require('react');
    vendors: ['react'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // Notice we use a variable
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel', // The Module to load. "babel" is short for "babel-loader"
      exclude: [nodeModulesDir],
      query:
        {
          presets: ['react', 'es2015'],
        },
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
  ],
};

module.exports = config;
