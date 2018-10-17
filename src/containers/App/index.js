import React, { Component } from 'react';
import JobSearch from '../JobSearch'
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <JobSearch />
        </div>
      </div>
    );
  }
}

export default App;
