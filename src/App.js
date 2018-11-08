import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import insertionSort from './algorithms/sort/insertionSort';

console.log('InsertionSort [5,2,4,6,1,3]:', insertionSort([5,2,4,6,1,3]));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Exercises from book Introduction to Algorithms, Third edition.
          </p>
          <small> Please, Check the console </small>
        </header>
      </div>
    );
  }
}

export default App;
