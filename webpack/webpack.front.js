
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default

module.exports = {
  entry: path.resolve(__dirname, "../src/client/index.tsx"),
  target: "web",
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "index.js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      title: "My app",
      filename: "base.html",
      template: path.resolve(__dirname, "../src/templates/base.html")
    }),
    new HTMLInlineCSSWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [ 'file-loader' ],
      },
    ]
  }
}
