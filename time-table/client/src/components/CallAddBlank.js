import React, { Component } from "react";
import Sidenav from "./SideNav";
import { Col, Row } from "reactstrap";

class CallAddBlank extends Component {
  render() {
    return (
      <div className="page">
        <Row className="occupy">
          <Col sm="3">
            <Sidenav />
          </Col>
          <Col sm="9">
            <div className="container opacityblank page">
              <img
                src="./assets/timetable-logo.png"
                align="middle"
                className="img-fluid imagespace"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CallAddBlank;
