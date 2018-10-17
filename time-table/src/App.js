import React, { Component } from "react";
import "./App.css";
import SignIn from "./SignIn";
import Register from "./Register";
import Navbar from "./Navbar";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        <Register />
      </div>
    );
  }
}

export default App;
