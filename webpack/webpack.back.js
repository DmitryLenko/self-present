
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../src/server/index.ts'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../dist/server'),
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
  },
}
