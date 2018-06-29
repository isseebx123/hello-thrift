import React, { Component } from 'react';
import Client from './Client';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          header
        </header>
        <p className="App-intro">
          To get started
        </p>
        <Client />
      </div>
    );
  }
}

export default App;
