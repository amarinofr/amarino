const { merge } = require('webpack-merge')
const path = require('path')

const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    hot: true,
    devMiddleware: {
      writeToDisk: true
    }
  },

  output: {
    path: path.resolve(__dirname, 'public')
  }
})
