import React, { Component } from "react";
import { Button, Label, Col, Row, Input, Form } from "reactstrap";
import Sidenav from "./SideNav";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentTeacher, createTeacher } from "../actions/teacherActions";
import Spinner from "./common/Spinner";

class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachersName: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    this.props.getCurrentTeacher();
  }

  onSubmit(e) {
    e.preventDefault();

    const teacherData = {
      teachersName: this.state.teachersName
    };
    this.props.createTeacher(teacherData, this.props.history);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.vaule });
  }

  render() {
    const { user } = this.props.auth;
    const { teacher, loading } = this.props.teacher;
    const { errors } = this.state;
    let teacherContent;
    if (teacher === null || loading) {
      teacherContent = <Spinner />;
    } else {
      // Check if logged in user has teacher data
      if (Object.keys(teacher) > 0) {
        teacherContent = <h4>TODO</h4>;
      } else {
        //User is logged in but has no teacher
        teacherContent = (
          <div>
            <div>
              <p className="lead text-muted">Welcome {user.name}</p>
              <p>You do not have any Teacher's Name, please add some </p>
              {/* <Link to="/creat-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link> */}
            </div>
          </div>
        );
      }
    }
    return (
      <div className="page">
        <Row className="occupy">
          <Col sm="3">
            <Sidenav />
          </Col>

          <Col sm="9">
            <div className="container mt-5 show">
              <h2 id="addteacher">Add Teachers</h2>
              <Row className="mt-5">
                <Col md={{ size: 3, offset: 1 }}>
                  <Label className="labelname">Teacher Name</Label>
                </Col>

                <Col md={7}>
                  <Input
                    type="text"
                    // id="teacherName"
                    name="teachersName"
                    value={this.state.teachersName}
                    placeholder="Teacher's Name"
                    onChange={this.onChange}
                    error={errors.teachersName}
                    info="Please use comma seperated values if giving more than one Teacher's Name input together"
                  />
                </Col>
                <Col md={{ size: 1, offset: 0.5 }}>
                  <Button
                    type="submit"
                    color="primary"
                    //onSubmit={this.onSubmit}
                  >
                    Add
                  </Button>
                </Col>
              </Row>
              <Row
                className="display-4"
                style={{ marginLeft: 50, marginTop: 25 }}
              >
                {teacherContent}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

Teacher.propTypes = {
  getCurrentTeacher: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  teacher: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  teacher: state.teacher,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentTeacher, createTeacher }
)(withRouter(Teacher));
