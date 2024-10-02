const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.pdf$/i,
        type: "asset/resource",
      },
      {
        test: /\.txt$/i, // Exclude .txt files from being parsed as JS modules
        type: "asset/resource",
        generator: {
          filename: "[name][ext]", // Keep the original name and extension
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/images/favicon.png",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/robots.txt", to: "robots.txt" }],
    }),
    new WebpackManifestPlugin({
      fileName: "manifest.json",
      publicPath: "",
    }),
  ],
};
