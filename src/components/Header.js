import React, {Component} from 'react';

class Header extends Component {
  render(){
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            {this.props.title}
          </a>
        </div>
      </nav>
    )
  }
}
export default Header
