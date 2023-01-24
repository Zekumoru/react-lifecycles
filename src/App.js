import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    console.clear();
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
