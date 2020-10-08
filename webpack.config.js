const path = require('path')

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },

  entry: {
    'quilljs-markdown': './index.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },

  mode: 'production',

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },
      filename: '[name].min.js',
      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
