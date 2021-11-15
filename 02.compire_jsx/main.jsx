// 範例1：Hello World!
ReactDOM.render(
  <h1>Hello World!</h1>,
  document.getElementById('root')
)

// 範例2：將嵌入呼叫 JavaScript function (formatName(user)) 的回傳值到一個 <h1> element 中。
function formatName(user) {
  return user.firstName+ ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);