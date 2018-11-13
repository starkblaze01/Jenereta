import React, { Component } from "react";
import { Button, Label, Col, Input, Row } from "reactstrap";
import PropTypes from "prop-types";
import { getCurrentSubject } from "../../actions/subjectActions";
import { getCurrentTeacher } from "../../actions/teacherActions";
import { getCurrentClass } from "../../actions/classActions";
import { connect } from "react-redux";

class Slots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slot: [
        {
          teachers: "",
          sections: "",
          subjects: "",
          numLectures: "",
          numLabs: null
        }
      ],
      numSlots: [""],
      teacher: [""],
      classes: [""],
      subject: [""],
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getCurrentSubject();
    this.props.getCurrentClass();
    this.props.getCurrentTeacher();
  }

  render() {
    const { subject } = this.props.subject;
    const { classes } = this.props.classes;
    const { teacher } = this.props.teacher;
    let subjects, section, tchr;
    if (!subject) subjects = <option disabled>Loading</option>;
    else {
      if (!subject.subject) subjects = <option disabled>Loading</option>;
      else {
        subjects = subject.subject.map(subject => (
          <option key={subject}>{subject}</option>
        ));
      }
    }
    if (!teacher) tchr = <option disabled>Loading</option>;
    else {
      if (!teacher.teachersName) tchr = <option disabled>Loading</option>;
      else {
        tchr = teacher.teachersName.map(tchrs => (
          <option key={tchrs}>{tchrs}</option>
        ));
      }
    }
    if (!classes) section = <option disabled>Loading</option>;
    else {
      if (!classes.classAndsec) section = <option disabled>Loading</option>;
      else {
        section = classes.classAndsec.map(cls => (
          <option key={cls}>{cls}</option>
        ));
      }
    }
    return (
      <div className="mt-5">
        <Row>
          <Col md={{ size: 3, offset: 0.5 }}>
            <Label>Teacher</Label>
            <Input type="select" name="classSection">
              {tchr}
            </Input>
          </Col>
          <Col md={{ size: 3, offset: 0.5 }}>
            <Label>Class-Section</Label>
            <Input type="select" name="teacher">
              {section}
            </Input>
          </Col>
          <Col md={{ size: 3, offset: 0.5 }}>
            <Label>Subject</Label>
            <Input type="select" name="subject">
              {subjects}
            </Input>
          </Col>
          <Col md={{ size: 2, offset: 0.5 }}>
            <Label>No. Of Lectures</Label>
            <Input
              type="number"
              name="lectures"
              placeholder="No. of lectures"
            />
          </Col>
          <Col md={{ size: 1, offset: 0.5 }}>
            <Label>Add</Label>
            <Button type="submit" color="primary">
              Add
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

Slots.propTypes = {
  getCurrentSubject: PropTypes.func.isRequired,
  getCurrentClass: PropTypes.func.isRequired,
  getCurrentTeacher: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  subject: PropTypes.object.isRequired,
  teacher: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  subject: state.subject,
  teacher: state.teacher,
  classes: state.classes,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    getCurrentSubject,
    getCurrentTeacher,
    getCurrentClass
  }
)(Slots);
