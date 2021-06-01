const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/app/index.tsx',
  devtool: 'inline-source-map',
  mode:'development',
  module: {
    rules: [
    {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/, 
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.css$/,
        loader: "css-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "app", "index.html"),
    }),
    // new MiniCssExtractPlugin({
    //   filename: "./src/yourfile.css",
    // }),
  ],
};