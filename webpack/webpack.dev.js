const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const devOpts = merge(common, {
    mode: 'development',
    devtool: "hidden-source-map",
    watch: true,
    watchOptions: {
        ignored: ["node_modules/**"],
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [ 'vue-style-loader', 'css-loader', 'sass-loader' ] 
            }
        ]
    },
})

module.exports = devOpts

