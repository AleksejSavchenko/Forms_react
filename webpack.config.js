const webpack = require('webpack');

module.exports = {
    entry: "./client/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: [/node_modules/, /public/],
                query: {
                    presets: ['react', 'es2015'],
                },
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
};
