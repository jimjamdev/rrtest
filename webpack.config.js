const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const RewriteImportPlugin = require("less-plugin-rewrite-import");
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
    devServer: {
        historyApiFallback:{
            index:'src/index.html'
        },
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
            /*{
                test: /\.(ts|tsx)$/,
                //exclude: /node_modules/,
                loaders: ['babel-loader', 'ts-loader']
            },*/
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
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: "[name]--[local]--[hash:base64:8]"
                        }
                    },
                    'css-loader',
                    'sass-loader',
                  /*  'postcss-loader'*/
                ]
            },
            {
                test: /\.(png|gif)$/,
                loader: 'url-loader'
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
            },
            {
                test: /\.(less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: [
                        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]---[hash:base64:5]',
                        'less-loader'
                    ]
                })
            },
            {
                test: /\.(ttf|eot|svg|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
   /* lessLoader: {
        lessPlugins: [
            new RewriteImportPlugin({
                paths: {
                    '../../theme.config':  __dirname + '/app/semantic-ui/theme.config',
                },
            }),
        ],
    },*/


    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: false
        }),
       /* new webpack.LoaderOptionsPlugin({
            minimize: false,
            debug: false,
            options: {
                lessLoader: {
                    lessPlugins: [
                        new RewriteImportPlugin({
                            paths: {
                                '../../theme.config': __dirname + '/src/app/styles/semantic-ui/theme.config',
                            },
                        }),
                    ],
                },
            }
        }),*/
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