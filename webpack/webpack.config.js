const WebpackShellPlugin = require("webpack-shell-plugin")
const merge = require('webpack-merge')
const webpackForBackend = require('./webpack.back')
const webpackForFrontend = require('./webpack.front')

const DEV_MODE = 'development'
const PROD_MODE = 'production'

const isDevMode = process.env.NODE_ENV !== PROD_MODE

const commonConfig = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  }
}

const nodemonConfig = {
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ["nodemon dist/server --watch dist/server"]
    })
  ]
}

const extendByMode = configs => configs.map(
  config => {
    if (isDevMode) {
      return merge(
        config,
        commonConfig,
        {
          devtool: "source-map",
          mode: DEV_MODE
        }
      )
    }
    return merge(
      config,
      commonConfig,
      {
        devtool: "source-map",
        mode: DEV_MODE
      }
    )
  }
)

module.exports = extendByMode([webpackForBackend, merge(webpackForFrontend, nodemonConfig)])
