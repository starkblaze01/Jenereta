import React, { Component } from "react";
import { Button, Label, Col, Row, Input, Form, FormFeedback } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import EachLab from "./EachLab";
import { getCurrentSubject, createLab } from "../../actions/subjectActions";
import Spinner from "../common/Spinner";

class Labs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: "option1",
      labname: "",
      numberoflabs: "",
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

    const labData = {
      labname: this.state.labname,
      numberoflabs: this.state.numberoflabs
    };
    this.props.createLab(labData);
    // this.forceUpdate();
    this.setState({
      labname: "",
      numberoflabs: "",
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
    let labContent;
    if (subject === null || loading) {
      labContent = <Spinner />;
    } else {
      let a = false;
      // Check if logged in user has subject data
      if (subject.lab !== undefined) {
        if (subject.lab.length > 0) {
          a = true;
        }
      }
      if (Object.keys(subject).length > 0 && a) {
        labContent = (
          <div>
            <EachLab labs={subject.lab} />
          </div>
        );
      } else {
        //User is logged in but has no teacher
        labContent = (
          <div>
            <div>
              <p className="lead text-muted">Welcome {user.name}</p>
              <p>You do not have any Lab Name, please add some </p>
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
              <Label className="labelname">Subject Name</Label>
            </Col>
            <Col md={7}>
              <Input
                type="text"
                id="labname"
                name="labname"
                placeholder="Lab Name"
                onChange={this.onChange}
                value={this.state.labname}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.labname
                })}
                title="One input at a time"
              />
              <FormFeedback>{errors.labname}</FormFeedback>
            </Col>
          </Row>

          <Row className="mt-8">
            <Col md={{ size: 3, offset: 1 }}>
              <Label className="labelname">Number of Labs</Label>
            </Col>
            <Col md={7}>
              <Input
                type="number"
                id="numberoflabs"
                name="numberoflabs"
                placeholder="No. of labs for this subject"
                onChange={this.onChange}
                value={this.state.numberoflabs}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.numberoflabs
                })}
                title="Should be Numeric"
              />
              <FormFeedback>{errors.numberoflabs}</FormFeedback>
            </Col>
            <Col md={{ size: 1, offset: 0.5 }}>
              <Button type="submit" color="primary">
                Add
              </Button>
            </Col>
          </Row>
        </Form>
        <Row className="display-4" style={{ marginLeft: 50, marginTop: 25 }}>
          {labContent}
        </Row>
      </div>
    );
  }
}

Labs.propTypes = {
  getCurrentSubject: PropTypes.func.isRequired,
  createLab: PropTypes.func.isRequired,
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
  { getCurrentSubject, createLab }
)(Labs);
