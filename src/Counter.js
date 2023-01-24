import React from 'react';

class Counter extends React.Component {
  constructor(props) {
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

  componentDidMount() {
    console.log('ComponentDidMount called');
    console.log('------------------------');
  }

  render() {
    console.log('Render called');

    return (
      <div className="Counter flex-column">
        <div>Counter: {this.state.counter}</div>
        <div className="buttons">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ComponentDidUpdate called');
    console.log('-------------------------');
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount called');
    console.log('---------------------------');
  }
}

export default Counter;
