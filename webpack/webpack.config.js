const WebpackShellPlugin = require("webpack-shell-plugin")
const merge = require('webpack-merge')
const webpackForBackend = require('./webpack.back')
const webpackForFrontend = require('./webpack.front')

const DEV_MODE = 'development'
const PROD_MODE = 'production'

const isDevMode = process.env.NODE_ENV !== PROD_MODE

const commonConfig = merge(
  {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }
      ],
    }
  },
  isDevMode ? { devtool: "source-map", mode: DEV_MODE } : { mode: PROD_MODE }
)

const getNodemonConfig = () => {
  if (isDevMode) {
    return {
      plugins: [
        new WebpackShellPlugin({
          onBuildEnd: ["nodemon dist/server --watch dist/server"]
        })
      ]
    }
  }
  return {}
}

console.log(`start building in ${process.env.NODE_ENV} mode`)

module.exports = [
  merge(
    webpackForBackend,
    commonConfig,
  ),
  merge(
    webpackForFrontend,
    commonConfig,
    getNodemonConfig()
  )
]
