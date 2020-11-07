const { VueLoaderPlugin } = require('vue-loader')

var path = require('path')
var APP_DIR = path.resolve(__dirname, '../', 'src')
var BUILD_DIR = path.resolve(__dirname, '../', 'dist')

module.exports = {
    entry: [ APP_DIR + '/index.ts'],
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
                test: /\.tsx?$/, 
                use: ["ts-loader"], 
                exclude: /node_modules/ 
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
        extensions: ['*', '.ts', '.js', '.vue', '.json'],
        alias: { 
            vue: 'vue/dist/vue.js', 
            '@': APP_DIR 
        },
        modules: ["node_modules"]
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    optimization: {}
}