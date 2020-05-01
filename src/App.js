import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name = "Gao Yu" age = "18"></Person>

      </div>
    );
  }
}

export default App;
