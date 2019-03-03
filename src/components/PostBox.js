import React, {Component} from 'react';
import trim from 'trim';

class PostBox extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: ''
    };
  }
  onChange(e){
    this.setState({
      message: e.target.value
    });
  }
  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== ''){
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/posts');
      dbCon.push({
        message: trim(e.target.value)
      });
      this.setState({
        message: ''
      });
    }
  }
render() {
    return (
      <div class="container">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Title</label>
          <input class="form-control" id="exampleFormControlInput1" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Content</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Post as (author)</label>
          <select class="form-control">
            <option>anonymous</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Post</button>
      </form>
      </div>
    )
  }
}
export default PostBox
