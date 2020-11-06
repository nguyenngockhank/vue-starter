const { VueLoaderPlugin } = require('vue-loader')

var path = require('path')
var APP_DIR = path.resolve(__dirname, '../', 'src')
var BUILD_DIR = path.resolve(__dirname, '../', 'dist')

module.exports = {
    entry: [ APP_DIR + '/app.js'],
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
                test: /\.(woff(2)?|ttf|eot|svg)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader', // npm install file-loader -S
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../fonts'
                    }
                }]
            }
        ]
    },
    resolve: {
        alias: { vue: 'vue/dist/vue.js', '@': APP_DIR },
        extensions: ['*', '.js', '.vue', '.json'],
        modules: ["node_modules"]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    optimization: {}
}