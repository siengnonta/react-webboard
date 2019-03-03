import React, { Component } from 'react';
import Header from '../src/components/Header';
import PostList from '../src/components/PostList';
import Post from '../src/components/Post';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase App" />
        <PostList />
      </div>
    );
  }
}
export default App;
