import React, {Component} from 'react';

class Post extends Component {
  render(){
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
}
export default Post
