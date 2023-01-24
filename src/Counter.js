import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    console.log('Constructor called');
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }

    return null;
  }

  componentDidMount() {
    console.log('ComponentDidMount called');
    console.log('------------------------');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log('ShouldComponentUpdate called - DO NOT RENDER');
      return false;
    }

    console.log('ShouldComponentUpdate called - RENDER');
    return true;
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
