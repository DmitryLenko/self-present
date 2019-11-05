const webpackForBackend = require('./webpack.back')
const webpackForFrontend = require('./webpack.front')

const DEV_MODE = 'development'
const PROD_MODE = 'production'

const isDevMode = process.env.NODE_ENV !== PROD_MODE

const extendByMode = configs => configs.map(
  config => {
    if (isDevMode) {
      return {
        ...config,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        devtool: 'source-map',
        mode: DEV_MODE
      }
    }
    return {
      ...config,
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      mode: PROD_MODE,
    }
  }
)

module.exports = extendByMode([webpackForBackend, webpackForFrontend])
