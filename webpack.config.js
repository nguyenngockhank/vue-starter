const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var path = require('path')
var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'dist');

var mode = process.env.NODE_ENV; // production or development

module.exports = {
    mode: mode,
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        path: BUILD_DIR,
        chunkFilename: '[id].chunk.js',
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            }
        ]
    },
    resolve: {
        alias: { vue: 'vue/dist/vue.js' },
        extensions: ['*', '.js', '.vue', '.json'],
        modules: [
            "node_modules",
            APP_DIR
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    optimization: {}
}

if (mode === 'production') {
    module.exports.devtool = '#source-map'

    module.exports.optimization.minimizer = (module.exports.optimization.minimizer || []).concat([
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
                compress: false,
                ecma: 6,
                mangle: true
            },
            sourceMap: true
        })
    ]);


    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}