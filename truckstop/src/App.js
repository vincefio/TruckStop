import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <div class="jumbotron jumbotron-fluid">
          <div class="container text-center">
            <h1 class="display-4">Truck Stop</h1>
            <p class="lead">Where Owner-Operators Find the Work They Want</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
