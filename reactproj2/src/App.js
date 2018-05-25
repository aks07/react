import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Friends, ServiceDemo} from "./Examples"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Welcome React</h3>
        <Friends/>
        <hr/>
        <ServiceDemo/>
      </div>
    );
  }
}

export default App;
