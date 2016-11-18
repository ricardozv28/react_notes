import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './Notes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Sticky Notes</h2>
        </div>
        <Notes />
      </div>
    );
  }
}

export default App;
