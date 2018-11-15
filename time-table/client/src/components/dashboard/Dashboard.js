import React, { Component } from "react";
//import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";
import isEmpty from "../../validation/is-empty";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;
    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <div className="lead text-muted">
              Welcome {user.name}
              <div>{profile.user.email}</div>
            </div>
            {/* <p className="lead text-muted">{email}</p> */}
            <ProfileActions />
            <div style={{ marginTop: "60px" }} />
            <div className="col-12">
              <img
                src={user.avatar}
                alt="Profile Pic"
                className="rounded-circle"
              />
            </div>
            <div>
              {isEmpty(profile.institute) ? null : <h4>Institute Name:</h4>}

              {isEmpty(profile.institute) ? null : (
                <span>{profile.institute}</span>
              )}
            </div>
            <div>
              {isEmpty(profile.institutewebsite) ? null : (
                <h4>Institute Website:</h4>
              )}

              {isEmpty(profile.institutewebsite) ? null : (
                <span>{profile.institutewebsite}</span>
              )}
            </div>
            <div style={{ marginTop: "25px" }}>
              <Link
                to="/display-time-table"
                type="button"
                className="btn btn-info"
              >
                View Time-Table
              </Link>
            </div>
            <div style={{ marginBottom: "40px" }} />
            <button
              style={{ marginBottom: "20px" }}
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete My Account
            </button>
          </div>
        );
      } else {
        //User is logged in but has no profile
        dashboardContent = (
          <div>
            <div className="lead text-muted">
              Welcome {user.name}
              <div>{user.email}</div>
            </div>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-lg btn-info">
              Create Profile
            </Link>
            <div style={{ marginBottom: "40px" }} />
            <button
              style={{ marginBottom: "20px" }}
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-danger"
            >
              Delete My Account
            </button>
          </div>
        );
      }
    }

    return (
      <div className="dashboard" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4" style={{ marginTop: "8%" }}>
                Dashboard
              </h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
