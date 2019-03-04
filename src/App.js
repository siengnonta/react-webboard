import React, { Component } from 'react';
import Home from '../src/components/Home';
import PostDetail from '../src/components/PostDetail';
import firebase from 'firebase';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props){super(props);var config = {
    apiKey: "AIzaSyD-efBGNUHeCQlgQrylgiWmKS6AIVN22Zk",
    authDomain: "samplefirebaseproject-143a3.firebaseapp.com",
    databaseURL: "https://samplefirebaseproject-143a3.firebaseio.com",
    projectId: "samplefirebaseproject-143a3",
    storageBucket: "samplefirebaseproject-143a3.appspot.com",
    messagingSenderId: "367755382770"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Router>
        <div class="container">
          <Route exact path="/" component={Home} />
          <Route path="/post/:id" component={PostDetail} />
        </div>
      </Router>
    );
  }
}
export default App;
