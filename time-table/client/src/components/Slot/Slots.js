import React, { Component } from "react";
import { Button, Label, Col, Input, Row, Form, FormFeedback } from "reactstrap";
import PropTypes from "prop-types";
import classnames from "classnames";
import EachSlot from "./EachSlot";
import Spinner from "../common/Spinner";
import { getCurrentSubject } from "../../actions/subjectActions";
import { getCurrentTeacher } from "../../actions/teacherActions";
import { getCurrentClass } from "../../actions/classActions";
import { getCurrentSlot, createSlot } from "../../actions/slotActions";
import { setTimeTableloading,getTimeTable } from '../../actions/timeTableActions';
import { connect } from "react-redux";
import { generate } from "../../utils/generator";
import { withRouter } from "react-router-dom";

class Slots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numLectures: "",
      teacher: "",
      sections: "",
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

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const slotData = {
      numLectures: this.state.numLectures,
      teacher: this.state.teacher,
      sections: this.state.sections,
      subject: this.state.subject
    };
    this.props.createSlot(slotData);
    this.setState({
      numLectures: "",
      teacher: "",
      sections: "",
      subject: "",
      errors: {}
    });
  }

  componentDidMount() {
    this.props.getCurrentSubject();
    this.props.getCurrentClass();
    this.props.getCurrentTeacher();
    this.props.getCurrentSlot();
  }

  async generator(slot,teacher, classes) {
    let slots = [];
    let numPeriods = 0;
    slot ? numPeriods = slot.monday+slot.tuesday+slot.wednesday+ slot.thursday+ slot.friday+slot.saturday : numPeriods = 0;
    numPeriods = numPeriods * classes.classAndsec.length;
    if(!numPeriods){
      return alert('Please Add Some Slots first');
    }
    let numLecture = 0;
    slot.slots.map(el =>
      {
      const tempSlot = { numLabs: null, numLectures: el.numLectures, subject: el.subject, sections: [el.sections], teacher: el.teacher}
      slots.push(tempSlot);
      return numLecture = numLecture + parseInt(el.numLectures,10);
      }
    );
    if(numPeriods<numLecture){
      return alert('Total number of Periods should be more than or equal to the total number of Lectures.')
    }
    this.props.setTimeTableloading();
    const result = await generate(
      slots,
      [slot.monday ? slot.monday : 0, slot.tuesday ? slot.tuesday : 0, slot.wednesday ? slot.wednesday : 0,
        slot.thursday ? slot.thursday : 0, slot.friday ? slot.friday : 0, slot.saturday ? slot.saturday : 0],
      teacher.teachersName,
      classes.classAndsec
    );
    const maxm = Math.max(
      slot.monday, slot.tuesday, slot.wednesday, slot.thursday, slot.friday, slot.saturday);
    result ? await this.props.getTimeTable({result,maxm}) : console.log("Try again");
    result ? this.props.history.push("/display-time-table") : alert("Sorry Couldn't generate the time-table in 20 iterations. Please try again.");
  }

  render() {
    const { user } = this.props.auth;
    const { slot, loading } = this.props.slot;
    let slotContent;
    const { errors } = this.state;
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

    if (slot === null || loading) {
      slotContent = <Spinner />;
    } else {
      let a = false;
      // Check if logged in user has subject data
      if (slot.slots !== undefined) {
        if (slot.slots.length > 0) {
          a = true;
        }
      }
      if (Object.keys(slot).length > 0 && a) {
        slotContent = (
          <div>
            <EachSlot slots={slot.slots} />
          </div>
        );
      } else {
        //User is logged in but has no slot
        slotContent = (
          <div>
            <div>
              <p className="lead text-muted">Welcome {user.name}</p>
              <p>You do not have any Slot, please add some </p>
            </div>
          </div>
        );
      }
    }

    return (
      <div className="mt-5">
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col md={{ size: 3, offset: 0.5 }}>
              <Label>Teacher</Label>
              <Input
                type="select"
                name="teacher"
                id="teacher"
                onChange={this.onChange}
                value={this.state.teacher}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.teacher
                })}
              >
                <option>Select</option>
                {tchr}
              </Input>
              <FormFeedback>{errors.teacher}</FormFeedback>
            </Col>
            <Col md={{ size: 3, offset: 0.5 }}>
              <Label>Class-Section</Label>
              <Input
                type="select"
                name="sections"
                id="sections"
                onChange={this.onChange}
                value={this.state.sections}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.sections
                })}
              >
                <option>Select</option>
                {section}
              </Input>
              <FormFeedback>{errors.sections}</FormFeedback>
            </Col>
            <Col md={{ size: 3, offset: 0.5 }}>
              <Label>Subject</Label>
              <Input
                type="select"
                name="subject"
                id="subject"
                onChange={this.onChange}
                value={this.state.subject}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.subject
                })}
              >
                <option>Select</option>
                {subjects}
              </Input>
              <FormFeedback>{errors.subject}</FormFeedback>
            </Col>
            <Col md={{ size: 2, offset: 0.5 }}>
              <Label>No. Of Lectures</Label>
              <Input
                type="number"
                name="numLectures"
                placeholder="No. of lectures"
                id="numLectures"
                onChange={this.onChange}
                value={this.state.numLectures}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.numLectures
                })}
              />
              <FormFeedback>{errors.numLectures}</FormFeedback>
            </Col>
            <Col md={{ size: 1, offset: 0.5 }}>
              <Label> - </Label>
              <Button type="submit" color="primary">
                Add
              </Button>
            </Col>
          </Row>
        </Form>
        <div
          style={{ float: "right", marginLeft: "20px", marginBottom: "10px" }}
        >
          <Button onClick={() => this.generator(slot, teacher, classes)} className="btn"
            disabled={loading || this.props.timeTable.loading}
          >
            Generate Time-Table
          </Button>
        </div>
        <Row className="display-4" style={{ marginLeft: 50, marginTop: 25 }}>
          {slotContent}
        </Row>
      </div>
    );
  }
}

Slots.propTypes = {
  getCurrentSubject: PropTypes.func.isRequired,
  getCurrentClass: PropTypes.func.isRequired,
  getCurrentTeacher: PropTypes.func.isRequired,
  getCurrentSlot: PropTypes.func.isRequired,
  createSlot: PropTypes.func.isRequired,
  getTimeTable: PropTypes.func.isRequired,
  setTimeTableloading: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  subject: PropTypes.object.isRequired,
  teacher: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  slot: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  subject: state.subject,
  teacher: state.teacher,
  classes: state.classes,
  errors: state.errors,
  slot: state.slot,
  auth: state.auth,
  timeTable: state.timeTable,
});


const SlotsWithRedux = connect(
  mapStateToProps,
  {
    getCurrentSubject,
    getCurrentTeacher,
    getCurrentClass,
    getCurrentSlot,
    createSlot,
    getTimeTable,
    setTimeTableloading,
  }
)(Slots);
export default withRouter(SlotsWithRedux);
