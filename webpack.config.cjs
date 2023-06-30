const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals')

const common = {

}


const frontend = {
    entry: "./src/static/index.js",
    devtool: 'source-map',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {presets: ["@babel/env"]}
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {extensions: ["*", ".tsx", ".ts", ".js", ".jsx", ".html"]},
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "static/mishegas-app.bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/static/index.html",
        filename: "./index.html"
    })],
    watch: true
}

const backend = {
     entry: [
         './src/server/server.ts'
     ],
        mode: "development",
        devtool: 'eval-source-map',

    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: [/node_modules/, /static/],
                loader: 'ts-loader',
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "server.cjs"
    },
    resolve: {extensions: [".ts", ".js"],
        extensionAlias: {
     ".js": [".js", ".ts"],
     ".cjs": [".cjs", ".cts"],
     ".mjs": [".mjs", ".mts"]
    }},
    target: 'node',
     externals: [nodeExternals()]// specify for example node_modules to be not bundled
     // other loaders, plugins etc. specific for backend
}

module.exports = [
    Object.assign({}, frontend),
    Object.assign({}, backend)
]