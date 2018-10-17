import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        <div className="form">
          <div>Sign Up</div>
          <br />
          <div>UserName</div>
          <input type="text" />
          <div>Email</div>
          <input type="email" />
          <div>Password</div>
          <input type="password" />
          <div>Confirm Password</div>
          <input type="password" />
          <button type="button">Submit</button>
        </div>
      </div>
    );
  }
}

export default Register;
