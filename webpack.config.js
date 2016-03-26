const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: [
    path.resolve(__dirname, 'app/main.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        loader: 'babel', // The Module to load. "babel" is short for "babel-loader"
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        ),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('app.css', {
      allChunks: true,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],

  postcss: [
    require('autoprefixer'),
  ],
};

module.exports = config;
