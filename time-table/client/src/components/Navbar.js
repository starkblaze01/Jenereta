import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { clearCurrentProfile } from "../actions/profileActions";
import { clearCurrentTeacher } from "../actions/teacherActions";

import {
  Nav,
  Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };

    this.togggleNav = this.togggleNav.bind(this);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  togggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
    this.props.clearCurrentProfile();
    this.props.clearCurrentTeacher();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink className="nav-link right" to="/dashboard">
            <span className="fa fa-address-book fa-lg" /> Profile
          </NavLink>
        </NavItem>

        <NavItem
          onClick={this.onLogoutClick}
          className="nav-link right"
          style={{ cursor: "pointer" }}
        >
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: "25px", marginRight: "5px" }}
            title="You must have gravatar connected to your email to display image"
          />
          Log Out
        </NavItem>
      </Nav>
    );

    const guestLinks = (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to={`/register`}>
            <Button
              id="button1"
              className="w3-button btn-info btn-lg"
              type="submit"
              color="secondary"
            >
              Register
            </Button>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to={`/SignIn`}>
            <Button
              id="button2"
              className="w3-button btn-info btn-lg"
              type="submit"
              color="secondary"
            >
              Sign In
            </Button>
          </NavLink>
        </NavItem>
      </Nav>
    );

    return (
      <React.Fragment>
        <Navbar
          dark
          color="success"
          expand="lg"
          fixed="top"
          scrolling-navbar="true"
        >
          <div className="container">
            <NavbarToggler onClick={this.togggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                id="jenereta"
                src="assets/ttlogo5.PNG"
                height="40"
                width="40"
                alt="TimeTable Generator"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"> Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg" /> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link " to="/handbook">
                    <span className="fa fa-book fa-lg"> HandBook</span>
                  </NavLink>
                </NavItem>
              </Nav>
              {isAuthenticated ? authLinks : guestLinks}
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile, clearCurrentTeacher }
)(Header);
