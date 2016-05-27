const webpack = require('webpack');
const config = require('./webpack.config');
const path = require('path');

config.devtool = '';

/* Uncomment and change 'libName' and entryPoint to the real names
config.entry = {
  libName: path.resolve(__dirname, 'src/entryPoint.js')
};
*/

config.output = {
  filename: 'index.js',
  library: 'react-es6-hot-reload-sandbox',
  libraryTarget: 'umd'
};
config.plugins = [];
config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin()
);
config.plugins.push(new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
}));
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
);

module.exports = config;