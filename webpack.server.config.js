const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: { server: './server.ts' },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
  externals: [
    /(node_modules|main\..*\.js)/,
    {
      '@hapiness/config': {
        commonjs: '@hapiness/config',
        root: '@hapiness/config'
      }
    }
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: "commonjs"
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
