var isDebug = process.env.NODE_ENV !== "production"; // console: set NODE_ENV=production -> npm run webpack
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'src/app.js'),
    output: { path: path.resolve(__dirname, 'bld'), filename: 'bundle.js' },
    devtool: isDebug ? "inline-sourcemap" : null,
    plugins: isDebug ? [] : [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
    watch: isDebug,

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ],
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['react-html-attrs'] // , 'transform-class-properties' (dont see a need for it ...)
                }
            }
        ]
    }
};
