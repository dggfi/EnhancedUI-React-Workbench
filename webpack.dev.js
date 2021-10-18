const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')
const tailwindss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    watch: true,
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
                use: ["style-loader"],
                exclude: /node_modules/
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
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
})