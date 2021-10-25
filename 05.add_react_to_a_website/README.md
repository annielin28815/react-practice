# React - Add React to a Website

## 主要內容

- [官方文件](https://zh-hant.reactjs.org/docs/add-react-to-a-website.html)
- 使用官方範例程式碼，學習如何使用 component。

## 實作效果

## 實作方法

### step1: 在 HTML 上加入一個 DOM Container

```html
<div id="like_button_container"></div>
```

### step2: 加上 Script 標籤，引入 react 和 其他 javascript 檔案。

```html
<!-- 載入 React。 -->
<!-- 注意：在發佈應用程式前，請把「development.js」替換成「production.min.js」。 -->
<script
  src="https://unpkg.com/react@17/umd/react.development.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
  crossorigin
></script>

<!-- 載入我們的 React component。-->
<script src="like_button.js"></script>
```

### step3: 建立一個檔案名為 like_button.js，裡面放官方給的 React Component 範例程式碼

```javascript
"use strict";

const e = React.createElement;

// React Component
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );
  }
}
```

### step4: 在 like_button.js 檔案的下方加上以下程式碼，以渲染出來到畫面上。

```javascript
// render
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
```
