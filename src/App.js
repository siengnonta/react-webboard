import React, { Component } from 'react';
import firebase from 'firebase';
import Header from '../src/components/Header';
import PostList from '../src/components/PostList';
import PostBox from '../src/components/PostBox';
import Post from '../src/components/Post';
import logo from './logo.svg';
import './App.css';

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
      <div class="container">
      <Header title="Simple Firebase App" />
      <div class="row">
        <div class="offset-md-3 col-md-6">
          <PostList db={firebase} />
        </div>
      </div>
      <div class="row">
        <div class="offset-md-3 col-md-6">
          <PostBox db={firebase} />
        </div>
      </div>
    </div>
    );
  }
}
export default App;
