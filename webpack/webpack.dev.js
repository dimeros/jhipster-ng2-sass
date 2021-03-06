const webpack = require('webpack');
const commonConfig = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ENV = 'dev';

module.exports = webpackMerge(commonConfig({env: ENV}), {
    module: {
        rules: [{
            test: /\.ts$/,
            loaders: [
                'tslint'
            ],
            exclude: ['node_modules']
        }]
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 9000,
            proxy: 'http://localhost:8080'
        }),
        new ExtractTextPlugin('styles.css'),
        new webpack.NoErrorsPlugin()
    ]
});
