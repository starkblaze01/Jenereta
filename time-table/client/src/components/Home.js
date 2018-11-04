import React, { Component } from "react";
import { Jumbotron, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/calladdblank");
    }
  }

  render() {
    return (
      <div className="page">
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>TimeTable Generator</h1>
                <p>
                  The process of creating time-table is quite tedious and
                  requires lots of human efforts. Time Table Generator aims to
                  reduce the time and efforts of manually creating the
                  timetable. It provides the most feasible solution by creating
                  a timetable with minimum number of clashes.
                </p>
              </div>
              <div className="col-12 col-sm-6">
                <img
                  alt="time-table"
                  src="assets/timetable-logo.png"
                  width="40%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </Jumbotron>
        <div className="row headsign">
          <Col md={{ size: 6, offset: 3 }}>
            <Link to={`/register`}>
              <Button
                className="btn-lg btn-info"
                type="submit"
                color="secondary"
              >
                Register
              </Button>
            </Link>
          </Col>
        </div>
        <div className="row headsign">
          <Col md={{ size: 6, offset: 3 }}>
            <Link to={`/SignIn`}>
              <Button
                className="btn-lg btn-info"
                type="submit"
                color="secondary"
                aria-label="Left Align"
              >
                Sign In
              </Button>
            </Link>
          </Col>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
