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

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    alert(
      "Username: " + this.username.value + "Password: " + this.password.value
    );
    event.preventDefault();
  }

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
                  <Form onSubmit={this.handleLogin}>
                    <FormGroup row>
                      <Col md={{ size: 2, offset: 3 }}>
                        <Label htmlFor="username">Username</Label>
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
                            id="username"
                            name="username"
                            placeholder="Username"
                            innerRef={input => (this.username = input)}
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
                            innerRef={input => (this.password = input)}
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
