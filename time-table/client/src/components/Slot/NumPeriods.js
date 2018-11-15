import React, { Component } from "react";
import {
  Button,
  Label,
  Col,
  Input,
  Form,
  FormGroup,
  FormFeedback
} from "reactstrap";
import { createnumSlot, getCurrentSlot } from "../../actions/slotActions";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import isEmpty from "../../validation/is-empty";
import Spinner from "../common/Spinner";

class NumPeriods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.slot) {
      if (nextProps.slot.monday) {
        const day = nextProps.slot;
        console.log(day);
        // If slot field doesn't exist, make empty string
        day.monday = !isEmpty(day.monday) ? day.monday : "";
        day.tuesday = !isEmpty(day.tuesday) ? day.tuesday : "";
        day.wednesday = !isEmpty(day.wednesday) ? day.wednesday : "";
        day.thursday = !isEmpty(day.thursday) ? day.thursday : "";
        day.friday = !isEmpty(day.friday) ? day.friday : "";
        day.saturday = !isEmpty(day.saturday) ? day.saturday : "";

        // Set component fields state
        this.setState({
          monday: day.monday,
          tuesday: day.tuesday,
          wednesday: day.wednesday,
          thursday: day.thursday,
          friday: day.friday,
          saturday: day.saturday
        });
      }
    }
  }

  componentDidMount() {
    this.props.getCurrentSlot();
  }

  onSubmit(e) {
    e.preventDefault();

    const numSlotData = {
      monday: this.state.monday,
      tuesday: this.state.tuesday,
      wednesday: this.state.wednesday,
      thursday: this.state.thursday,
      friday: this.state.friday,
      saturday: this.state.saturday
    };
    this.props.createnumSlot(numSlotData);
    this.setState({
      errors: {}
    });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    const { slot, loading } = this.props.slot;

    let numslotContent;
    if (slot === null || loading) {
      numslotContent = <Spinner />;
    } else {
      // Check if logged in user has slot data
      if (Object.keys(slot).length > 0) {
        numslotContent = (
          <div style={{ marginLeft: "52%" }}>
            <span style={{ marginTop: "60px" }} />
            <span>
              {isEmpty(slot.monday) ? null : <Col>Monday:</Col>}

              {isEmpty(slot.monday) ? null : <span>{slot.monday}</span>}
            </span>
            <span>
              {isEmpty(slot.tuesday) ? null : <Col>Tuesday:</Col>}

              {isEmpty(slot.tuesday) ? null : <Col>{slot.tuesday}</Col>}
            </span>
            <span>
              {isEmpty(slot.wednesday) ? null : <Col>Wednesday:</Col>}

              {isEmpty(slot.wednesday) ? null : <Col>{slot.wednesday}</Col>}
            </span>
            <span>
              {isEmpty(slot.thursday) ? null : <Col>Thursday:</Col>}

              {isEmpty(slot.thursday) ? null : <Col>{slot.thursday}</Col>}
            </span>
            <span>
              {isEmpty(slot.friday) ? null : <Col>Friday:</Col>}

              {isEmpty(slot.friday) ? null : <Col>{slot.friday}</Col>}
            </span>
            <span>
              {isEmpty(slot.saturday) ? null : <Col>Saturday:</Col>}

              {isEmpty(slot.saturday) ? null : <Col>{slot.saturday}</Col>}
            </span>
            <span style={{ marginBottom: "40px" }} />
          </div>
        );
      } else {
        //User is logged in but has no slot
        numslotContent = (
          <div>
            <p>Please add some info</p>
            <div style={{ marginBottom: "40px" }} />
          </div>
        );
      }
    }

    return (
      <div className="mt-5">
        <Form onSubmit={this.onSubmit}>
          <FormGroup row>
            <Col md={{ size: 2, offset: 3 }}>
              <Label className="dayname" htmlFor="monday">
                Monday
              </Label>
            </Col>
            <Col md={4}>
              <Input
                type="number"
                id="monday"
                name="monday"
                onChange={this.onChange}
                value={this.state.monday}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.monday
                })}
              />
              <FormFeedback>{errors.monday}</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 2, offset: 3 }}>
              <Label className="dayname" htmlFor="tuesday">
                Tuesday
              </Label>
            </Col>
            <Col md={4}>
              <Input
                type="number"
                id="tuesday"
                name="tuesday"
                onChange={this.onChange}
                value={this.state.tuesday}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.tuesday
                })}
              />
              <FormFeedback>{errors.tuesday}</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 2, offset: 3 }}>
              <Label className="dayname" htmlFor="wednesday">
                Wednesday
              </Label>
            </Col>
            <Col md={4}>
              <Input
                type="number"
                id="wednesday"
                name="wednesday"
                onChange={this.onChange}
                value={this.state.wednesday}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.wednesday
                })}
              />
              <FormFeedback>{errors.wednesday}</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 2, offset: 3 }}>
              <Label className="dayname" htmlFor="thursday">
                Thursday
              </Label>
            </Col>
            <Col md={4}>
              <Input
                type="number"
                id="thursday"
                name="thursday"
                onChange={this.onChange}
                value={this.state.thursday}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.thursday
                })}
              />
              <FormFeedback>{errors.thursday}</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 2, offset: 3 }}>
              <Label className="dayname" htmlFor="friday">
                Friday
              </Label>
            </Col>
            <Col md={4}>
              <Input
                type="number"
                id="friday"
                name="friday"
                onChange={this.onChange}
                value={this.state.friday}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.friday
                })}
              />
              <FormFeedback>{errors.friday}</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 2, offset: 3 }}>
              <Label className="dayname" htmlFor="saturday">
                Saturday
              </Label>
            </Col>
            <Col md={4}>
              <Input
                type="number"
                id="saturday"
                name="saturday"
                onChange={this.onChange}
                value={this.state.saturday}
                className={classnames("fa fa-search form-control-feedback", {
                  "is-invalid": errors.saturday
                })}
              />
              <FormFeedback>{errors.saturday}</FormFeedback>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" color="secondary" className="mt-2">
                Submit
              </Button>
            </Col>
          </FormGroup>
          <FormGroup row>{numslotContent}</FormGroup>
        </Form>
      </div>
    );
  }
}

NumPeriods.propTypes = {
  createnumSlot: PropTypes.func.isRequired,
  getCurrentSlot: PropTypes.func.isRequired,
  slot: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  slot: state.slot,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createnumSlot, getCurrentSlot }
)(NumPeriods);
