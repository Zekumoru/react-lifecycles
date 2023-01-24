import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    console.clear();
    console.log('Constructor called');
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    console.log('Render called');

    return (
      <div className="App">
        <div className="counter">Counter: {this.state.counter}</div>
        <div className="buttons">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
