var path = require('path');
var webpack = require('webpack');
module.exports = {
    mode: 'production',
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/js/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
}; 