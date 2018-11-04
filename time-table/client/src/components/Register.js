import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from "reactstrap";
import "../index.css";
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      errors: {}
      // touched: {
      //   name: false,
      //   email: false,
      //   password: false,
      //   confirmpassword: false
      // }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    //   this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/calladdblank");
    }
  }

  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword
    };
    this.props.registerUser(newUser, this.props.history);
  }

  // handleBlur = field => evt => {
  //   this.setState({
  //     touched: { ...this.state.touched, [field]: true }
  //   });
  // };

  render() {
    // const errors = this.validate(
    //   this.state.name,
    //   this.state.email,
    //   this.state.password,
    //   this.state.confirmpassword
    // );
    const { errors } = this.state;

    return (
      <div className="container page">
        <div className="verticalspace">
          <div className="row">
            <div className="col-12 mb-3">
              <h2>Sign Up</h2>
            </div>
            <div className="col-12 col-md-9">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Col md={{ size: 2, offset: 3 }}>
                    <Label htmlFor="name">Name</Label>
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
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        className={classnames(
                          "fa fa-search form-control-feedback",
                          { "is-invalid": errors.name }
                        )}
                        //   onBlur={this.handleBlur("name")}
                        // prefix={
                        //   <span
                        //     className={classnames(
                        //       "fa fa-search form-control-feedback",
                        //       { "is-invalid": errors.name }
                        //     )}
                        //   />
                        // }
                      />
                      {/* {errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )} */}
                      <FormFeedback>{errors.name}</FormFeedback>
                    </div>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={{ size: 2, offset: 3 }}>
                    <Label htmlFor="email">Email</Label>
                  </Col>
                  <Col md={7}>
                    <div className="input-group mb-1">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                          <i className="fa fa-envelope icon" />
                        </span>
                      </div>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        className={classnames(
                          "fa fa-search form-control-feedback",
                          { "is-invalid": errors.email }
                        )}
                        // onBlur={this.handleBlur("email")}
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
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        className={classnames(
                          "fa fa-search form-control-feedback",
                          { "is-invalid": errors.password }
                        )}
                        //  onBlur={this.handleBlur("password")}
                      />
                      <FormFeedback>{errors.password}</FormFeedback>
                    </div>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={{ size: 2, offset: 3 }}>
                    <Label htmlFor="confirmpassword">Confirm Password</Label>
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
                        id="confirmpassword"
                        name="confirmpassword"
                        placeholder="Confirm Password"
                        value={this.state.confirmpassword}
                        onChange={this.handleInputChange}
                        className={classnames(
                          "fa fa-search form-control-feedback",
                          { "is-invalid": errors.confirmpassword }
                        )}
                        //  onBlur={this.handleBlur("confirmpassword")}
                      />
                      <FormFeedback>{errors.confirmpassword}</FormFeedback>
                    </div>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={{ size: 10, offset: 3 }}>
                    <Button type="submit" color="secondary" className="mt-2">
                      Submit
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
