const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
               test:  /\.js$/,
               exclude: /node_modules/,
               use: {
                 loader: 'babel-loader'
               }
            }
        ]
    }
}

//join current absolute path __direname with the path/place where we want our bundle stored