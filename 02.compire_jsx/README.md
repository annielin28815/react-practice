# React - Compile JSX

## &#9758;JSX 是一種模版語法。執行 JSX 會產生 React「element」。

- 為了方便閱讀，我們將 JSX 拆成很多行表達。雖然這並不需要，我們建議將多行 JSX 包在括號中來避免遇到自動分號補足的麻煩。
- 在編譯之後，JSX expressions 就變成了一般的 JavaScript function 呼叫並回傳 JavaScript 物件。所以也可以在 if 跟 for 迴圈中使用 JSX，將其指定到一個變數，使用 JSX 作為參數並由 function 中回傳。

```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

- 可以使用引號將字串設定為屬性，或在屬性中使用大括號來嵌入一個 JavaScript expression。在使用字串屬性的時候使用引號，使用 expressions 的時候使用大括號，但不要同時使用。

```javascript
const element = <div tabIndex="0"></div>;
```

```javascript
const element = <img src={user.avatarUrl}></img>;
```

## &#9758;安裝相關編譯環境

### 一、建立 Webpack 環境

```terminal
$ npm init -y
```

### 二、因需使用 babel 轉譯，所以安裝：

```terminal
npm install -D babel-loader
npm install --save-dev @babel/core
npm install --save-dev @babel/preset-react
npm install --save-dev webpack-cli
```

### 三、因需轉譯 ES6，所以安裝：

```terminal
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
