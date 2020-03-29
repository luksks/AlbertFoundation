const webpack = require('webpack');

const config = {
    entry: './components/albertfoundation/b4w.js',
    output: {
        path: __dirname,
        filename: './components/albertfoundation/build/b4w.js'
    },
    devtool: 'source-map'
};

module.exports = config;
