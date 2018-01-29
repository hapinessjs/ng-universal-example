const path = require('path');
const webpack = require('webpack');
const config = require('config');
const fs = require('fs-extra');

fs.outputFileSync(path.resolve(__dirname, 'dist/config.json'), JSON.stringify(config));

module.exports = {
  entry: { server: './server.ts' },
  resolve: {
    alias: {
      config: path.resolve(__dirname, 'dist/config.json')
    },
    extensions: ['.ts', '.js']
  },
  target: 'node',
  // this makes sure we include node_modules and other 3rd party libraries
  externals: [/(node_modules|main\..*\.js)/],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for "WARNING Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?hapiness(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'),
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?hapiness(\\|\/)ng-universal(.+)?/,
      path.join(__dirname, 'src'),
    )
  ],
  stats: {
    warnings: false
  }
};
