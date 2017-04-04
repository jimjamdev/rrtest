const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

console.info(`Running in ${process && process.env && process.env.NODE_ENV} mode`);

const env = process && process.env && process.env.NODE_ENV;
const dev = !(env && env === 'production');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/app/index.html',
    filename: 'index.html',
    inject: 'body',
});



module.exports = {

    entry: {
        app: './src/app'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: '[name].[hash].map'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss', 'sass', '.css', '.less', '.json'],
        /*modules: [
            path.resolve('./src'),
            path.resolve('./src/app'),
            path.resolve('./node_modules')
        ]*/
    },

    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                //exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                //exclude: /node_modules/,
                loaders: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'style-loader',
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: "[name]--[local]--[hash:base64:8]"
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.(scss)$/,
                //exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'style-loader',
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: "[name]--[local]--[hash:base64:8]"
                        }
                    },
                    'sass-loader',
                  /*  'postcss-loader'*/
                ]
            },
            {
                test: /\.(less)$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'less-loader', ]
            }
        ]
    },

    plugins: [
        HtmlWebpackPluginConfig,
        /* Create separate bundle for React libs */
       /* new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
        }),*/
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'react',
            minChunks(module, count) {
                var context = module.context;
                return context && (
                    context.indexOf('node_modules\\react\\') >= 0 ||
                    context.indexOf('node_modules\\react-dom\\') ||
                    context.indexOf('node_modules\\react-redux\\') ||
                    context.indexOf('node_modules\\redux\\') ||
                    context.indexOf('node_modules\\react-router\\') >= 0);
            },
        }),*/
        // Create separate bundle for UI libs
        /*new webpack.optimize.CommonsChunkPlugin({
            name: 'ui',
            minChunks(module, count) {
                var context = module.context;
                return context && (context.indexOf('node_modules\\react-toolbox\\') >= 0);
            },
        }),*/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => /node_modules/.test(module.resource)
        }),
    ]
};