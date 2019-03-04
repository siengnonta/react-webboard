import Header from '../components/Header';
import Post from '../components/Post';
import React, { Component } from 'react';

class PostDetail extends Component {
  render() {
    return (
      <div class="container">
        <Header title="Home" />
        <h2 class="mb-1">Title is "{this.props.match.params.id}"</h2>
        <div class="d-flex w-100 justify-content-between">
          <h3 class="mb-1">Query funtion was not implemented yet</h3>
        </div>
      </div>
    )
  }
}
export default PostDetail
