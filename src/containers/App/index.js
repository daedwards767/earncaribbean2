import React, { Component } from 'react';
import JobSearch from '../JobSearch'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <JobSearch />
        </div>
      </div>
    );
  }
}

export default App;
