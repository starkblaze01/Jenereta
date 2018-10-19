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
import "../index.css";
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      touched: {
        username: false,
        email: false,
        password: false,
        confirmpassword: false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("current state is: " + JSON.stringify(this.state));
    alert("current state is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  validate(username, email, password, confirmpassword) {
    const errors = {
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
    };

    if (this.state.touched.password && password.length < 3)
      errors.password = "Password should be >=3 characters";
    else if (this.state.touched.password && password.length > 10)
      errors.password = "Password should be <=10 characters";
    if (this.state.touched.confirmpassword && confirmpassword.length < 3)
      errors.confirmpassword = "Password should be >=3 characters";
    else if (this.state.touched.confirmpassword && confirmpassword.length > 10)
      errors.confirmpassword = "Password should be <=10 characters";
    if (this.state.touched.username && username.length < 3)
      errors.username = "Username should be >=3 characters";
    if (
      this.state.touched.email &&
      email.split("").filter(x => x === "@").length !== 1
    )
      errors.email = "Email should contain a @";

    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.confirmpassword
    );
    return (
      <div className="container">
        <div className="verticalspace">
          <div className="row">
            <div className="col-12 mb-3">
              <h2>Sign Up</h2>
            </div>

            <div className="col-12 col-md-9">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Col md={{ size: 2, offset: 3 }}>
                    <Label htmlFor="username">Username</Label>
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
                        id="username"
                        name="username"
                        placeholder="Username"
                        valid={errors.username === ""}
                        invalid={errors.username !== ""}
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur("username")}
                        prefix={
                          <span className="fa fa-search form-control-feedback" />
                        }
                      />
                      <FormFeedback>{errors.username}</FormFeedback>
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
                        valid={errors.email === ""}
                        invalid={errors.email !== ""}
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur("email")}
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
                        valid={errors.password === ""}
                        invalid={errors.password !== ""}
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur("password")}
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
                        valid={errors.confirmpassword === ""}
                        invalid={errors.confirmpassword !== ""}
                        value={this.state.confirmpassword}
                        onChange={this.handleInputChange}
                        onBlur={this.handleBlur("confirmpassword")}
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

export default Register;
