const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
      mode: 'development',
      devtool: 'eval-source-map',
      entry: resolve(__dirname, "src", "react.tsx"),
      target: 'electron-renderer',
      module: {
        rules: [{
          test: /\.(j|t)sx$/,
          exclude: /node_modules/,
          use: [{ loader: 'awesome-typescript-loader' }]
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader','postcss-loader']
      }
      ]
      },
      output: {
        path: resolve(__dirname + 'dist'),
        filename: 'electron.js'
      },
      resolve: {
        extensions: ['.js', '.jsx','tsx', "ts"]
      },
      plugins:[
          new HtmlWebpackPlugin({
            template: resolve(__dirname, "public", "index.html")
          })
      ]
    }
  ];