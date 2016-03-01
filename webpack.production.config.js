const fs = require('fs');
const path = require('path');

module.exports = {

  entry: path.resolve(__dirname, 'server.js'),

  output: {
    filename: 'server.bundle.js',
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server',
  ]).reduce((ext, mod) => {
    ext[mod] = 'commonjs ' + mod;
    return ext;
  }, {}),

  node: {
    __filename: true,
    __dirname: true,
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
};
