import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    return (
      <Link to="/post" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{this.props.title}</h5>
        </div>
        <p class="mb-1">{this.props.body}</p>
        <small class="text-muted">by {this.props.author}</small>
      </Link>
    )
  }
}
export default Post
