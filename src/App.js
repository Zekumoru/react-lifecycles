import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    console.clear();
    super(props);

    this.state = {
      mount: true,
    };
  }

  mountCounter = () => {
    this.setState({ mount: true });
  };

  unmountCounter = () => {
    this.setState({ mount: false });
  };

  render() {
    return (
      <div className="App flex-column">
        {!this.state.mount || <Counter />}
        <div className="buttons">
          <button onClick={this.mountCounter} disabled={this.state.mount}>
            Mount Counter
          </button>
          <button onClick={this.unmountCounter} disabled={!this.state.mount}>
            Unmount Counter
          </button>
        </div>
      </div>
    );
  }
}

export default App;
