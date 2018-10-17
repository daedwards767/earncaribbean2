import React, { Component } from 'react';
import JobSearch from '../JobSearch'
import styles from './App.css';
import firebase from 'firebase';
import {FIREBASE_API_KEY, 
        FIREBASE_AUTH_DOMAIN,
        FIREBASE_DATABASE_URL,
        FIREBASE_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET,
        FIREBASE_MESSAGING_SENDER_ID} from '../../env'

class App extends Component {

  firebaseDB = null

  componentWillMount(){
    firebase.initializeApp({ 
      apiKey: FIREBASE_API_KEY, 
      authDomain: FIREBASE_AUTH_DOMAIN, 
      databaseURL: FIREBASE_DATABASE_URL, 
      projectId: FIREBASE_PROJECT_ID, 
      storageBucket: FIREBASE_STORAGE_BUCKET, 
      messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
    });
    this.firebaseDB = firebase.database()
  }
  render() {
    return (
      <div>
        <div className={styles.container}>
          <JobSearch firebaseDB={this.firebaseDB}/>
        </div>
      </div>
    );
  }
}

export default App;
