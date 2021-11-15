# Render Element 到 DOM 內

- 更新 UI 唯一的方式是建立一個新的 element，並且將它傳入到 ReactDOM.render()。
- 從 setInterval() callback 每秒呼叫 ReactDOM.render()。
- React DOM 會將 element 和它的 children 與先前的狀態做比較，並且只更新必要的 DOM 達到理想的狀態。即使我們在每秒建立一個 element 描述整個 UI tree，只有內容更改的 text node 才會被 React DOM 更新。
