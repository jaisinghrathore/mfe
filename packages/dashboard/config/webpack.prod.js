const {merge} = require('webpack-merge');
const ModuleFedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const prodConfig = {
    mode : 'production',
    output:{
        filename: '[name].[contenthash].js',
        publicPath: '/dashboard/latest/'
    },
    plugins : [
        new ModuleFedrationPlugin({
            name:"dashboard",
            filename: 'remoteEntry.js',
            exposes: {
                './dashboardIndex' : './src/bootstrap'
            },
            shared : packageJson.dependencies
        }),
    ]
}

module.exports = merge(commonConfig,prodConfig);