const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/js/main.js", // Entry point for your JS
    output: {
        filename: "bundle.[contenthash].js", // Contenthash for cache-busting
        path: path.resolve(__dirname, "dist"), // Output directory
        clean: true, // Cleans the dist folder before each build
    },
    mode: "production", // Production mode for optimized build
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"], // Processes HTML files
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], // Handles CSS files
            },
            {
                test: /\.(svg|png|jpeg|jpg|gif|ico|webp)$/i,
                type: "asset/resource", // Copies images to output folder
                generator: {
                    filename: "assets/images/[name][hash][ext]", // Image output directory
                },
            },
            {
                test: /\.txt$/i, // Handles .txt files
                type: "asset/resource",
                generator: {
                    filename: "[name][ext]", // Keep original file name and extension
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // Excludes node_modules
                use: {
                    loader: "babel-loader", // Transpiles modern JS to older JS versions
                    options: {
                        presets: ["@babel/preset-env"], // ES6+ features
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html", // Path to HTML template
            favicon: "./src/images/favicon.png", // Path to favicon
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/robots.txt", to: "robots.txt" }, // Copies robots.txt as-is
                { from: "src/manifest.json", to: "manifest.json" }, // Copies manifest.json
            ],
        }),
    ],
    resolve: {
        extensions: [".js", ".json"], // Resolve these extensions
    },
    devtool: "source-map", // Generates source maps for debugging
    optimization: {
        splitChunks: {
            chunks: "all", // Splits vendor and application code
        },
    },
};
