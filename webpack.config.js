const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './app/index.js',  // 没有以"./"开头会被认为是一个模块
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    mode: 'development'
    module: {
        loaders: [
            {
                test: /\.js$/,             // 所有以js结尾的都用babel-loader处理
                exclude: /node_modules/,   // 除了该文件夹下的
                loader: 'babel-loader',
            }, {
                test: /\.css$/,
                loader: 'style!css!postcss',
            }, {
                test: /\.less/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
}
