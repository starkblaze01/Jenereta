import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

import {
  Nav,
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
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Navbar>
        <span>
          <NavLink className="nav-link right" to="/profile">
            <span className="fa fa-address-book fa-lg">Profile</span>
          </NavLink>
        </span>
        {/* <NavItem> */}
        {/* <NavLink className="nav-link right" to="/SignIn"> */}
        <span
          onClick={this.onLogoutClick}
          className="fa fa-sign-out nav-link right fa-lg"
        >
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: "25px", marginRight: "5px" }}
            title="You must have gravatar connected to your email to display image"
          />
          Log Out
        </span>
        {/* </NavLink> */}
        {/* </NavItem> */}
      </Navbar>
    );

    const guestLinks = (
      <Navbar>
        <span>
          <NavLink className="nav-link right" to="/SignIn">
            <span className="fa fa-sign-in fa-lg">Sign In</span>
          </NavLink>
        </span>
        <span>
          <NavLink className="nav-link right" to="/register">
            <span className="fa fa-plus fa-lg">Register</span>
          </NavLink>
        </span>
      </Navbar>
    );

    return (
      <React.Fragment>
        <Navbar dark color="success" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.togggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/timetable-logo.png"
                height="30"
                width="41"
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
                    <span className="fa fa-info fa-lg"> About Us</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/faq">
                    <span className="fa fa-question-circle fa-lg"> FAQ</span>
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
  { logoutUser }
)(Header);
