import { Link } from 'react-router-dom';
import React, {Component} from 'react';

class Header extends Component {
  render(){
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">{this.props.title}</Link>
        </div>
      </nav>
    )
  }
}
export default Header
