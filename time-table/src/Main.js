import React, { Component } from "react";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Jenereta</h1>
        </div>
        <Router>
          <div>
            <button type="button">Sign In</button>
            <button type="button">Sign Up</button>
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;
