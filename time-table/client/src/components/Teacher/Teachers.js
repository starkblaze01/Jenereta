import React, { Component } from "react";
import { Button, Label, Col, Row, Input, FormFeedback, Form } from "reactstrap";
import Sidenav from "../SideNav";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import Teacher from "./Teacher";
import { getCurrentTeacher, createTeacher } from "../../actions/teacherActions";
import Spinner from "../common/Spinner";

class Teachers extends Component {
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
    this.props.createTeacher(teacherData);
    // this.forceUpdate();
    this.setState({
      teachersName: "",
      errors: {}
    });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { user } = this.props.auth;
    const { teacher, loading } = this.props.teacher;
    const { errors } = this.state;
    let teacherContent;
    if (teacher === null || loading) {
      teacherContent = <Spinner />;
    } else {
      let a = false;
      // Check if logged in user has teacher data
      if (teacher.teachersName !== undefined) {
        if (teacher.teachersName.length > 0) {
          a = true;
        }
      }
      if (a && Object.keys(teacher).length > 0) {
        teacherContent = (
          <div>
            <Teacher teachers={teacher.teachersName} />
          </div>
        );
      } else {
        //User is logged in but has no teacher
        teacherContent = (
          <div>
            <div>
              <p className="lead text-muted">Welcome {user.name}</p>
              <p>You do not have any Teacher's Name, please add some </p>
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
              <Form onSubmit={this.onSubmit}>
                <Row className="mt-5">
                  <Col md={{ size: 3, offset: 1 }}>
                    <Label className="labelname">Teacher Name</Label>
                  </Col>

                  <Col md={7}>
                    <Input
                      type="text"
                      id="teacherName"
                      name="teachersName"
                      value={this.state.teachersName}
                      placeholder="Teacher's Name"
                      onChange={this.onChange}
                      className={classnames(
                        "fa fa-search form-control-feedback",
                        { "is-invalid": errors.teachersName }
                      )}
                      title="Please use comma seperated values if giving more than one Teacher's Name input together"
                    />
                    <FormFeedback>{errors.teachersName}</FormFeedback>
                  </Col>
                  <Col md={{ size: 1, offset: 0.5 }}>
                    <Button type="submit" color="primary">
                      Add
                    </Button>
                  </Col>
                </Row>
              </Form>
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

Teachers.propTypes = {
  getCurrentTeacher: PropTypes.func.isRequired,
  createTeacher: PropTypes.func.isRequired,
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
)(Teachers);
