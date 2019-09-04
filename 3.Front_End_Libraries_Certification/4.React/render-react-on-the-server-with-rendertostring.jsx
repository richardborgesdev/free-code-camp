
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>renderToString</div>
  }
};

ReactDOMServer.renderToString(<App/>);
// change code below this line
