
const path = require('path')

const DEV_MODE = 'development'
const PROD_MODE = 'production'

const isDevMode = process.env.NODE_ENV !== PROD_MODE

const commonConfig = {
  entry: path.resolve(__dirname, '../src/index.ts'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js'
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

const devConfig = {
  ...commonConfig,
  devtool: 'source-map',
  mode: DEV_MODE
}

const prodConfig = {
  ...commonConfig,
  mode: PROD_MODE,
}

module.exports = isDevMode ? devConfig : prodConfig
