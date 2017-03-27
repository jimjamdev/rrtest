const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

console.info(`Running in ${process && process.env && process.env.NODE_ENV} mode`);

const env = process && process.env && process.env.NODE_ENV;
const dev = !(env && env === 'production');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/app/index.html',
    filename: 'index.html',
    inject: 'body'
});



module.exports = {

    entry: {
        app: './src/app' ,
        vendor: ['react', 'react-dom', 'redux', 'react-redux']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: '[name].map'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
    },

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.(css|scss|sass|less)$/,
                exclude: /node_modules/,
                loader: 'style-loader'
            }
        ]
    },

    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.optimize.CommonsChunkPlugin("common"),
        /*new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })*/
    ]
};