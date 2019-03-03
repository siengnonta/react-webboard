import React, { Component } from 'react';

class PostList extends Component {
  constructor(props){
    super(props);
    this.state  = {
      messages: []
    }
  }
  render(){
    return (
      <div>
        PostList Component
      </div>
    )
  }
}

export default PostList
