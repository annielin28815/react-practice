# React - Components 與 Props

## &#9758;Components

概念上來說，component 就像是 JavaScript 的 function，它接收任意的參數（稱之為「props」）並且回傳描述畫面的 React element。

- Component 的字首須為大寫字母：React 會將小寫字母開頭的組件視為原始 DOM 標籤，舉例來說，`<div />` 就會被視為是 HTML 的 div 標籤，但是 `<Welcome />` 則是一個 component，而且需要在作用域中使用 Welcome。
- 定義 component：使用 function 或 ES6 的 class，而兩種 component 在 React 中是同等的，且都擁有額外的特性。(可看實作之 `single.js檔`)
- render component：

```javascript
ReactDOM.render(第一個element, 第二個element);
```

- 組合 component：Component 可以在輸出中引用其他 component。(可看實作之 `many.js檔`)
- 抽離 Component：建議從 component 的角度為 props 命名，而不是它的使用情境。從下而上，逐步應用到畫面的最高層級。以經驗來說，如果一個 UI 中有一部分會被重複使用很多次（Button、Panel、Avatar），或者它足夠複雜（App、FeedStory、Comment），則可以將它提取到獨立的 component。

## &#9758;Props

- 不管你使用 function 或是 class 來宣告 component，都絕不能修改自己的 props。
- React 是很彈性的，但有一條嚴格的規定：所有的 React component 都必須像 Pure function 一般保護他的 props。
