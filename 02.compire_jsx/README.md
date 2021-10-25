# React - Compile JSX

## &#9758;JSX 是一種模版語法。

## &#9758;安裝相關編譯環境

### 一、建立 Webpack 環境

```
$ npm init -y
```

### 二、因需使用 babel 轉譯，所以安裝：

```
npm install -D babel-loader
npm install --save-dev @babel/core
npm install --save-dev @babel/preset-react
npm install --save-dev webpack-cli
```

### 三、因需轉譯 ES6，所以安裝：

```
npm install --save-dev @babel/preset-env
```

### 四、建立 webpack.config.js

```javascript
const path = require("path");

module.exports = {
  entry: "./02.compire_jsx/main.jsx",
  output: {
    path: path.resolve(__dirname, "01.helloworld"),
    filename: "main.js",
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

### 五、執行 `npm run build`，可發現網頁成功顯示 Hello world!

## &#9758;React 的 DevTools

### - Download the React DevTools for a better development experience: https://reactjs.org/link/react-devtools

### - 進到上述網址後，可依個人習慣添加網頁瀏覽器之擴充套件。如果有問題，會在擴充套件之處做建議提醒。

## &#9758;持續運行 webpack

### 一、在 package.json 的 scripts 加上 watch

```javascript
  "scripts": {
    "watch": "webpack -w"
  },
```

### 二、執行 npm run watch
