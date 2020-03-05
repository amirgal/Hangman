import React, { Component } from 'react';
import './App.css';
import Solution from './Components/Solution'
import Score from './Components/Score'
import Letters from './Components/Letters'


class App extends Component {

  render() {
    return (
        <div className="App">
          <Score />
          <Solution />
          <Letters />
        </div>
    );
  }
}

export default App;
