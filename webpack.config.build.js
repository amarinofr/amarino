const path = require('path')

const { merge } = require('webpack-merge')
const config = require('./webpack.config')

const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')

module.exports = merge(config, {
  mode: 'production',

  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip'
    }),

    new BrotliPlugin()
  ],

  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        }
      }
    },

    minimizer: [
      new TerserPlugin()
    ]
  },

  output: {
    path: path.join(__dirname, 'public')
  }
})
