const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const prodOpts = merge(common, {
    mode: 'production',
    devtool: "inline-cheap-source-map",
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [ MiniCssExtractPlugin.loader,  'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],

    optimization: {
        minimize: true,
    },
})

module.exports = prodOpts

