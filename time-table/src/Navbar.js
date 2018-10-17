import React, { Component } from "react";
import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="logo">
            <a href="">Jenereta</a>
          </li>
          <li className="right navlink">
            <a href=""> About</a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
