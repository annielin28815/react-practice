
// function components
// 概念上來說，component 就像是 JavaScript 的 function，它接收任意的參數（稱之為「props」）並且回傳描述畫面的 React element。
function Welcome(props) {
  return <h1>Hello, {props.name}.</h1>;
}

// class components
class Welcome extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name}</h1>);
  }
}

// React element 可以是使用者自定義的 component。React 將 JSX 屬性和 children 作為 single object 傳遞給該 component。我們稱這個 object 為「props」。
const element = <Welcome name="Annie" />;

// 渲染出 Hello, Annie.過程如下：
// 我們對 <Welcome name="Annie" /> 這個 element 呼叫了 ReactDOM.render()。
// React 以 {name: 'Annie'} 作為 props 傳入 Welcome component 並呼叫。
// Welcome component 回傳了 <h1>Hello, Annie</h1> 這個 element 作為返回值。
// React DOM 有效的將 DOM 更新為 <h1>Hello, Annie</h1>。
ReactDOM.render(element, document.getElementById('root'));