import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="NavBar">
        YouTube
        <Link exact to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default NavBar;
