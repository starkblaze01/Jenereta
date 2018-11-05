import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from "reactstrap";

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

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/calladdblank");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/calladdblank");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }

  // handleLogin(event) {
  //   alert(
  //     "Username: " + this.username.value + "Password: " + this.password.value
  //   );
  //   event.preventDefault();
  // }

  render() {
    const { errors } = this.state;

    return (
      <div className="container page">
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
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fa fa-user icon" />
                        </span>
                      </div>
                      <Input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        // innerRef={input => (this.username = input)}
                        className={classnames(
                          "fa fa-search form-control-feedback",
                          { "is-invalid": errors.email }
                        )}
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                      <FormFeedback>{errors.email}</FormFeedback>
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
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fa fa-lock icon" />
                        </span>
                      </div>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        className={classnames(
                          "fa fa-search form-control-feedback",
                          { "is-invalid": errors.password }
                        )}
                        // innerRef={input => (this.password = input)}
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                      <FormFeedback>{errors.password}</FormFeedback>
                    </div>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={{ size: 10, offset: 3 }}>
                    <Button type="submit" color="secondary" className="mt-2">
                      Login
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(SignIn);
