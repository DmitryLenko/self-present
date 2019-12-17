
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, "../src/server/index.ts"),
  target: "node",
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "index.js"
  },
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      { test: /\.(png|svg|jpg|gif|s[ac]ss)$/i, loader: "ignore-loader" }
    ]
  }
}
