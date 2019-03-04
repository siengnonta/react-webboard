import React, { Component } from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';
import PostBox from '../components/PostBox';
import Post from '../components/Post';
import firebase from 'firebase';

class Home extends Component {
  render() {
    return (
      <div class="container">
        <Header title="React Webboard" />
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
export default Home
