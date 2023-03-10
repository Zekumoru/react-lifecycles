import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    console.clear();
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
      showErrorComponent: false,
    };
  }

  mountCounter = () => {
    this.setState({ mount: true });
  };

  unmountCounter = () => {
    this.setState({ mount: false });
  };

  ignoreProp = () => {
    this.setState({ ignoreProp: Math.random() });
  };

  generateSeed = () => {
    this.setState({ seed: Number.parseInt(Math.random() * 100) });
  };

  toggleError = () => {
    this.setState({ showErrorComponent: !this.state.showErrorComponent });
  };

  render() {
    return (
      <div className="App flex-column">
        {!this.state.mount || (
          <Counter
            ignoreProp={this.state.ignoreProp}
            seed={this.state.seed}
            showErrorComponent={this.state.showErrorComponent}
          />
        )}
        <div className="buttons">
          <button onClick={this.mountCounter} disabled={this.state.mount}>
            Mount Counter
          </button>
          <button onClick={this.unmountCounter} disabled={!this.state.mount}>
            Unmount Counter
          </button>
          <button onClick={this.ignoreProp}>Ignore Prop</button>
          <button onClick={this.generateSeed}>Generate Seed</button>
          <button onClick={this.toggleError}>Toggle Error</button>
        </div>
      </div>
    );
  }
}

export default App;
