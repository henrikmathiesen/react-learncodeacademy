var isDebug = process.env.NODE_ENV !== "production"; // console: set NODE_ENV=production -> npm run webpack
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'js/app.js'),
    output: { path: path.resolve(__dirname, 'js'), filename: 'bundle.js' },
    devtool: isDebug ? "inline-sourcemap" : null,
    plugins: isDebug ? [] : [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};