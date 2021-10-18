const dotenv = require("dotenv");
if (!dotenv.config()) {
    console.log(" - Error in webpack.config.js: .env");
    process.exit(-1);
}
const HtmlWebpackPlugin = require("html-webpack-plugin");
process.traceDeprecation = true;

const {
    WEBSITE_ROOT
} = process.env;
module.exports = {
    target: "web",
    entry: "./src/main.tsx",
    output: {
        path: WEBSITE_ROOT,
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "EnhancedUI",
            filename: "ControlPanel.html",
            template: "./templates/index.html"
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".scss"]
    },
}