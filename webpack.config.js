const dotenv = require("dotenv");
if (!dotenv.config()) {
    console.log(" - Error in webpack.config.js: .env");
    process.exit(-1);
}
const HtmlWebpackPlugin = require("html-webpack-plugin");
const tailwindss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
process.traceDeprecation = true;

const {
    NODE_ENV,
    WEBSITE_ROOT
} = process.env;
module.exports = {
    mode: NODE_ENV,
    target: "web",
    watch: true,
    entry: "./src/main.tsx",
    output: {
        path: WEBSITE_ROOT,
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "EnhancedUI",
            filename: "Terminal.html",
            template: "./templates/index.html"
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".scss"]
    },
    devtool: "source-map",
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
                test: /\.(scss)$/i,
                use: ["style-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(scss)$/i,
                use: ["css-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(scss)$/i,
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
                test: /\.(scss)$/i,
                use: ["sass-loader"],
                exclude: /node_modules/
            },
            {enforce: "pre", test:/\.js$/, loader: "source-map-loader"}
        ]
    }
}