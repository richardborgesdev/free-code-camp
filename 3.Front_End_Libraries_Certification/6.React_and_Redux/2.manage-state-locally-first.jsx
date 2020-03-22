class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage(event) {
    {event.preventDefault()}

    this.setState({
        input: '',
        messages: [...this.state.messages,...[this.state.input]]
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* render an input, button, and ul here */ }
          <input value={this.state.input} onChange={this.handleChange}/>
          <button onClick={this.submitMessage}>Submit!</button>
        { /* change code above this line */ }
        <ul>
          {this.state.messages.map((x, i)=>{
            return <li key={i}>{x}</li>
          })}
        </ul>
      </div>
    );
  }
};