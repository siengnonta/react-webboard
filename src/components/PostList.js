import React, { Component } from 'react';
import Post from './Post';
import _ from 'lodash';

class PostList extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };
    let app = this.props.db.database().ref('posts');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }
  getData(values) {
    let postsVal = values;
    let posts = _(postsVal)
                    .keys()
                    .map(postKey => {
                      let cloned = _.clone(postsVal[postKey]);
                      cloned.key = postKey;
                      return cloned;
                    }).value();
    this.setState({
      posts: posts
    });
  }

  render() {
    let postNodes = this.state.posts.map((post, index) => {
      return (
          <Post key={index + "post-card"}
          title={post.title}
          body={post.body}
          author={post.author}
          created={post.created}/>
      )
    });
    return (
      <div class="list-group">
        {postNodes}
      </div>
    );
  }
}
export default PostList
