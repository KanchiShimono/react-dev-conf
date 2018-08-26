const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.jsx'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 3000,
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  // change production when build for production environment
  mode: 'development',
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js(x)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/,
            exclude: /node_modules/,
            loader: 'url-loader',
            options: {
              limit: 20000,
              name: '[name].[ext]',
            },
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
};
