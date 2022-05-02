const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        static: '../dist'
    },
    module: {
        rules: [
            {
                test: /\.(j,t)sx?/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['./dist']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}