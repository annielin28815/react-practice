# React - Compile JSX

## 建立 Webpack 環境

```
$ npm init -y
```

## 因需使用 babel 轉譯，所以安裝：

```
npm install -D babel-loader
npm install --save-dev @babel/core
npm install --save-dev @babel/preset-react
npm install --save-dev webpack-cli
```

## 因需轉譯 ES6，所以安裝：

```
npm install --save-dev @babel/preset-env
```

## 建立 webpack.config.js

```javascript
const path = require("path");

module.exports = {
  entry: "02.compire_jsx/main.jsx",
  output: {
    path: path.resolve(__dirname, "01.helloworld"),
    filename: main.js,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
```

## 更改 package.json

```javascript
// 原為
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
// 改為
"scripts": {
   "build": "webpack"
 },
```
