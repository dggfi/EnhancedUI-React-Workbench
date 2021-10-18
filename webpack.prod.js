const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const tailwindss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: "D-Pad Tabletop",
            template: "./templates/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?/i,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    configFile: "ts.config.json"
                }
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: MiniCssExtractPlugin.loader
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: ["css-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                loader: "postcss-loader",
                exclude: /node_modules/,
                options: {
                    postcssOptions: {
                        plugins: [
                            tailwindss("./tailwind.config.js"),
                            autoprefixer
                        ]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: ["sass-loader"],
                exclude: /node_modules/
            },
        ]
    },
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin()
        ]
    }
})