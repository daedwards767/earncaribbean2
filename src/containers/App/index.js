import React, { Component } from 'react';
import logo from '../../images/earncaribbean_logo_small.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="search-box">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
