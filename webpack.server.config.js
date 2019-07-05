const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'none',
    entry: { server: './server.ts' },
    target: 'node',
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    optimization: {
        minimize: false
    },
    externals: [
        {
            // This is the only module you have to install with npm in your final packaging
            // npm i config
            config: {
                commonjs: 'config',
                root: 'config'
            }
        }
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: "commonjs"
    },
    module: {
        noParse: /polyfills-.*\.js/,
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' },
            {
                // Mark files inside `@angular/core` as using SystemJS style dynamic imports.
                // Removing this will cause deprecation warnings to appear.
                test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
                parser: { system: true },
            }
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
            /(.+)?hapiness(\\|\/)(.+)?/,
            path.join(__dirname, 'src'),
            {}
        )
    ],
    stats: {
        warnings: false
    }
};
