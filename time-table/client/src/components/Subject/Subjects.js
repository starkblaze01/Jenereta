import React, { Component } from "react";
import { Button, Label, Col, Row, Input, Form, FormFeedback } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import EachSubject from "./EachSubject";
import { getCurrentSubject, createSubject } from "../../actions/subjectActions";
import Spinner from "../common/Spinner";

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
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
    this.props.getCurrentSubject();
  }

  onSubmit(e) {
    e.preventDefault();

    const subjectData = {
      subject: this.state.subject
    };
    this.props.createSubject(subjectData);
    // this.forceUpdate();
    this.setState({
      subject: "",
      errors: {}
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { user } = this.props.auth;
    const { subject, loading } = this.props.subject;
    const { errors } = this.state;
    let subjectContent;
    if (subject === null || loading) {
      subjectContent = <Spinner />;
    } else {
      let a = false;
      // Check if logged in user has subject data
      if (subject.subject !== undefined) {
        if (subject.subject.length > 0) {
          a = true;
        }
      }
      if (a && Object.keys(subject).length > 0) {
        subjectContent = (
          <div>
            <EachSubject subjects={subject.subject} />
          </div>
        );
      } else {
        //User is logged in but has no teacher
        subjectContent = (
          <div>
            <div>
              <p className="lead text-muted">Welcome {user.name}</p>
              <p>You do not have any Subject Name, please add some </p>
            </div>
          </div>
        );
      }
    }

    return (
      <div>
        <Form onSubmit={this.onSubmit} className="mt-5">
          <Row>
            <Col md={{ size: 3, offset: 1 }}>
              <Label>Subject Name</Label>
            </Col>

            <Col md={7}>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject Name"
                onChange={this.onChange}
                value={this.state.subject}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.subject
                })}
                title="Please use comma seperated values if giving more than one Subject Name input together"
              />
              <FormFeedback>{errors.subject}</FormFeedback>
            </Col>
            <Col md={{ size: 1, offset: 0.5 }}>
              <Button type="submit" color="primary">
                Add
              </Button>
            </Col>
          </Row>
        </Form>
        <Row className="display-4" style={{ marginLeft: 50, marginTop: 25 }}>
          {subjectContent}
        </Row>
      </div>
    );
  }
}

Subjects.propTypes = {
  getCurrentSubject: PropTypes.func.isRequired,
  createSubject: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  subject: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  subject: state.subject,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentSubject, createSubject }
)(Subjects);
