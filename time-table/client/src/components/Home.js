import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
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
      <div className="homepage">
        <Jumbotron>
          <div className="container page">
            <div className="row row-header">
              <div className="col-12 col-md-6">
                <div className="intro text-center">
                  <h1 className="grand-title text-color-white title-text">
                    {" "}
                    TimeTable Generator{" "}
                  </h1>
                  <p className="white">
                    The process of creating time-table is quite tedious and
                    requires lots of human efforts. Time Table Generator aims to
                    reduce the time and efforts of manually creating the
                    timetable. It provides the feasible solution by creating a
                    timetable with minimum number of clashes.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <img
                  id="ttlogo"
                  alt="time-table"
                  src="assets/ttlogo5.PNG"
                  width="65%"
                  height="65%"
                />
              </div>
            </div>
          </div>
        </Jumbotron>
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
