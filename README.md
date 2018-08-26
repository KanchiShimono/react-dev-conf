# react-dev-conf

Minimal configuration files for developing React.

## Requirement

- npm or yarn
- React
- Babel
- webpack
- eslint

## Install dependencies

```sh
# initialize
yarn init -y

# React
yarn add react react-dom prop-types

# CSS in JS
yarn add jss react-jss

# Babel
yarn add --dev @babel/core @babel/cli @babel/preset-env @babel/preset-react

# webpack
yarn add --dev webpack webpack-cli webpack-dev-server
yarn add --dev babel-loader@8 style-loader css-loader url-loader file-loader

# eslint
yarn add --dev eslint babel-eslint
# check the version of dependencies
# npm info "eslint-config-airbnb@latest" peerDependencies
yarn add --dev <dependency>@<version>
# e.g. yarn add --dev eslint-plugin-import@2.7.0 eslint-plugin-jsx-a11y@6.0.2 eslint-plugin-react@7.4.0
yarn add --dev eslint-config-airbnb
```

## Configuration files

### webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.jsx'),
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
```

### babelrc

```json
{
  "presets": [ "@babel/preset-env", "@babel/preset-react" ]
}
```

### eslintrc

```json
// eslintrc.json
{
    "extends": [
        "airbnb"
    ],
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ]
    }
}
```

```json
// eslintignore
node_modules/
dist/
```