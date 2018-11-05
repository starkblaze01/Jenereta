import React from "react";
import { SideNav, Nav } from "react-sidenav";
import { NavLink } from "react-router-dom";
import "../index.css";

const Sidenav = () => (
  <div className="page">
    <SideNav defaultSelectedPath="home">
      <div className="container ml-0 mb-0 mt forcolor">
        <Nav className="sidenav">
          <NavLink className="nav-link" to="/subject">
            <span className="fa fa-book"> Add Subjects</span>
          </NavLink>
        </Nav>
        <Nav className="sidenav">
          <NavLink className="nav-link" to="/teacher">
            <span className="fa fa-users"> Add Teachers</span>
          </NavLink>
        </Nav>
        <Nav className="sidenav">
          <NavLink className="nav-link" to="/classSection">
            <span className="fa fa-pencil-square-o"> Add Class-section</span>
          </NavLink>
        </Nav>
        <Nav className="sidenav">
          <NavLink className="nav-link" to="/slotdetails">
            <span className="fa fa-th"> Slot Details</span>
          </NavLink>
        </Nav>
      </div>
    </SideNav>
  </div>
);

export default Sidenav;
