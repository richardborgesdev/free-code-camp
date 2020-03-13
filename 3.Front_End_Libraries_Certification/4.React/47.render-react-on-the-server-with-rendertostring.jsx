class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>renderToString</div>
  }
};

// change code below this line
ReactDOMServer.renderToString(<App/>);