import React, {Component} from 'react';
import trim from 'trim';

class PostBox extends Component {
  constructor(props){
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      author: '',
      body: '',
      title: '',
    };
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
          <label for="exampleFormControlTextarea1">Content</label>
          <textarea
            class="form-control"
            rows="3"
            onChange={this.handleBodyChange}
            value={this.state.body}>
          </textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Post as (author)</label>
          <select
            class="form-control"
            onChange={this.handleAuthorChange}
            value={this.state.author}>
              <option>anonymous</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
          </select>
        </div>
        <button class="btn btn-primary" onClick={this.submit}>Post</button>
      </form>
      </div>
    )
  }
}
export default PostBox
