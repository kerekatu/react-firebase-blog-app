const path = require('path')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
require('dotenv').config({ path: '.env' })

module.exports = env => {
  const isProduction = env === 'production'

  return {
    entry: ['./src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          use: [
            'style-loader',
            'css-loader',
            'resolve-url-loader',
            'sass-loader'
          ],
          test: /\.(sa|sc|c)ss$/
        },
        {
          loader: 'url-loader',
          test: /\.(gif|png|jpe?g|svg)$/i
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    },
    plugins: [
      new WebpackBar(),
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN
        ),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(
          process.env.FIREBASE_DATABASE_URL
        ),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
          process.env.FIREBASE_PROJECT_ID
        ),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        ),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
          process.env.FIREBASE_MESSAGING_SENDER_ID
        )
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/',
      noInfo: true,
      stats: 'minimal'
    }
  }
}
