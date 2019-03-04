import React, {Component} from 'react';
import trim from 'trim';
import _ from 'lodash';

class PostBox extends Component {
  constructor(props){
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.submit = this.submit.bind(this);

    let app = this.props.db.database().ref('users');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });

    this.state = {
      author: '',
      body: '',
      title: '',
      users: []
    };
  }

  getData(values) {
    let usersVal = values;
    let users = _(usersVal)
                    .keys()
                    .map(userKey => {
                      let cloned = _.clone(usersVal[userKey]);
                      cloned.key = userKey;
                      return cloned;
                    }).value();
    this.setState({
      author: users[0].name,
      users: users
    });
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value });
  }

  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

  submit(e) {
    let dbCon = this.props.db.database().ref('posts');
    dbCon.push().set({
      body: trim(this.state.body),
      author: this.state.author,
      title: this.state.title
    });
  }

render() {
    let userNodes = this.state.users.map((user, index) => {
      return (
          <option key={index + "user-card"}>
            {user.name}
          </option>
      )
    });

    return (
      <div class="container">
      <form>
        <div class="form-group">
          <label>Title</label>
          <input class="form-control"
          onChange={this.handleTitleChange}
          value={this.state.title} />
        </div>
        <div class="form-group">
          <label>Content</label>
          <textarea
            class="form-control"
            rows="3"
            onChange={this.handleBodyChange}
            value={this.state.body}>
          </textarea>
        </div>
        <div class="form-group">
          <label>Post as (author)</label>
          <select
            class="form-control"
            onChange={this.handleAuthorChange}
            onLoad={this.handleAuthorChange}
            value={this.state.author}>
              {userNodes}
          </select>
        </div>
        <button class="btn btn-primary" onClick={this.submit}>Post</button>
      </form>
      </div>
    )
  }
}
export default PostBox
