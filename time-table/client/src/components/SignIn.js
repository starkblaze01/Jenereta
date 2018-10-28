import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    // const target = event.target;
    // const value = target.value;
    // const name = target.name;
    // this.setState({
    //   [name]: value
    // });
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    // console.log("current state is: " + JSON.stringify(this.state));
    //  alert("current state is: " + JSON.stringify(this.state));
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
  }

  // handleLogin(event) {
  //   alert(
  //     "Username: " + this.username.value + "Password: " + this.password.value
  //   );
  //   event.preventDefault();
  // }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <div className="verticalspace">
              <div className="row">
                <div className="col-12 mb-3">
                  <h2>Login</h2>
                </div>

                <div className="col-12 col-md-9">
                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                      <Col md={{ size: 2, offset: 3 }}>
                        <Label htmlFor="email">Email</Label>
                      </Col>
                      <Col md={7}>
                        <div className="input-group mb-1">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              <i className="fa fa-user icon" />
                            </span>
                          </div>
                          <Input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email"
                            // innerRef={input => (this.username = input)}
                            value={this.state.email}
                            onChange={this.handleInputChange}
                          />
                        </div>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md={{ size: 2, offset: 3 }}>
                        <Label htmlFor="password">Password</Label>
                      </Col>
                      <Col md={7}>
                        <div className="input-group mb-1">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              <i className="fa fa-lock icon" />
                            </span>
                          </div>
                          <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            // innerRef={input => (this.password = input)}
                            value={this.state.password}
                            onChange={this.handleInputChange}
                          />
                        </div>
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col md={{ size: 10, offset: 3 }}>
                        <Button
                          type="submit"
                          color="secondary"
                          className="mt-2"
                        >
                          Login
                        </Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default SignIn;
