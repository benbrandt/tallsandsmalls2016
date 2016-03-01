import webpack from 'webpack';
import path from 'path';

const config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel', // The Module to load. "babel" is short for "babel-loader"
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015'],
      },
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000',
    }],
  },
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ] : [],
};

module.exports = config;
