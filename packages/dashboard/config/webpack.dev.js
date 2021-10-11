const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require('../package.json');

const devConfig = {
    mode : "development",
    output : {
        publicPath : 'http://localhost:8082/'
    },
    devServer : {
        port : 8082,
        historyApiFallback : {
            index : 'index.html'
        },
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './public/index.html',
        }),
        new ModuleFedrationPlugin({
            name:"dashboard",
            filename: "remoteEntry.js",
            exposes: {
                "./dashboardIndex" : "./src/bootstrap"
            },
            shared : packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig,devConfig);