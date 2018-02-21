const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack.bundle.js',
        publicPath: '/'
    },

    /*  babel-loader : allows transpiling JavaScript files using Babel JS compiler
     *  style-loader : adds CSS to the DOM by injecting a <style> tag
     *  css-loader : takes a CSS file and returns the CSS with imports and url(...)
     */
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            { test: /\.(png|jpg|gif|svg)$/, use: 
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            }
        ]
    },

    /*  historyApiFallback : catch stray requests and return the index.html before serving correct route
     */
    devServer: {
        historyApiFallback: true
    },
    plugins: [new HTMLWebpackPlugin({
        template: 'app/index.html'
    })]
};

module.exports = config;