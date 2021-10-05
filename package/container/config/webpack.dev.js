const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require('../package.json');



const devConfig = {
    mode : "development",   
    devServer : {
        port : 8080,
        historyApiFallback : {
            index : 'index.html'
        },
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './public/index.html',
        }),
        new ModuleFedrationPlugin({
            name:"container",
            remotes: {
                marketing:'marketing@http://localhost:8081/remoteEntry.js',
            },
            shared : packageJson.dependencies
        }),
    ]
}

module.exports = merge(commonConfig,devConfig);