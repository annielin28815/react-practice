// function component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// class conponent
class Welcome extends React.Component {
  render() {
    return (<h1>Hello, {this.props.name}</h1>);
  }
}

// App component
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

// render 多次 Welcome 的 App component
ReactDOM.render(
  <App />,
  document.getElementById('root')
);