import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };

    this.togggleNav = this.togggleNav.bind(this);
  }

  togggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
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
                <NavItem>
                  <NavLink className="nav-link right" to="/profile">
                    <span className="fa fa-address-book fa-lg">Profile</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link right" to="/SignIn">
                    <span className="fa fa-sign-in fa-lg">Sign In</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link right" to="/register">
                    <span className="fa fa-plus fa-lg">Register</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
