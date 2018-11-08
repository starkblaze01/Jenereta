import React, { Component } from "react";
import { Button, Label, Col, Row, Input, Form, FormFeedback } from "reactstrap";
import Sidenav from "../SideNav";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import Class from "./Class";
import { getCurrentClass, createClass } from "../../actions/classActions";
import Spinner from "../common/Spinner";

class ClassSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classAndsec: "",
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
    this.props.getCurrentClass();
  }

  onSubmit(e) {
    e.preventDefault();

    const classData = {
      classAndsec: this.state.classAndsec
    };

    this.props.createClass(classData);
    // this.forceUpdate();
    this.setState({
      classAndsec: "",
      errors: {}
    });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { user } = this.props.auth;
    const { classes, loading } = this.props.classes;
    const { errors } = this.state;
    let classContent;
    if (classes === null || loading) {
      classContent = <Spinner />;
    } else {
      // Check if logged in user has class data
      let a = false;
      if (classes.classAndsec !== undefined) {
        if (classes.classAndsec.length > 0) {
          a = true;
        }
      }
      if (Object.keys(classes).length > 0 && a) {
        classContent = (
          <div>
            <Class section={classes.classAndsec} />
          </div>
        );
      } else {
        //User is logged in but has no class
        classContent = (
          <div>
            <div>
              <p className="lead text-muted">Welcome {user.name}</p>
              <p>You do not have any Subject, please add some </p>
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
              <h2 id="addclass">Add Class-Section</h2>
              <Form onSubmit={this.onSubmit}>
                <Row className="mt-5">
                  <Col md={{ size: 3, offset: 1 }}>
                    <Label className="labelname">Class-Section</Label>
                  </Col>
                  <Col md={7}>
                    <Input
                      type="text"
                      id="class"
                      name="classAndsec"
                      value={this.state.classAndsec}
                      placeholder="eg. 5A"
                      onChange={this.onChange}
                      className={classnames(
                        "fa fa-search form-control-feedback",
                        { "is-invalid": errors.classAndsec }
                      )}
                      title="Please use comma seperated values if giving more than one Class input together"
                    />
                    <FormFeedback>{errors.classAndsec}</FormFeedback>
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
                {classContent}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

ClassSection.propTypes = {
  getCurrentClass: PropTypes.func.isRequired,
  createClass: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  classes: state.classes,
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentClass, createClass }
)(ClassSection);
