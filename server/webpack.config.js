

const nodeExternals = require('webpack-node-externals')
const path = require('path')
require('dotenv').config()

module.exports = {
  entry: './src/index.ts',
  mode: process.env.NODE_ENV,
  watch: process.env.NODE_ENV === 'development',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  module:{
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
        ]
      }
    ],
  },
  externals: [ nodeExternals() ],
  resolve: {
    extensions: ['.ts', '.js'],
  }
}