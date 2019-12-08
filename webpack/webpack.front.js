
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/client/index.tsx'),
  target: 'web',
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  }
}
