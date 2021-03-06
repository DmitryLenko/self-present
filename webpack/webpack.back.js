
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
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              onlyLocals: true,
            },
          },
        ]
      },
      { test: /\.(png|svg|jpg|gif)$/i, loader: "ignore-loader" }
    ]
  }
}
