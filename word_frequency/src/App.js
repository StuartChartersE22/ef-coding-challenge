import React, { Component } from 'react';
import './style/App.css';
import Analyser from './containers/Analyser.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Analyser/>
      </div>
    );
  }
}

export default App;
