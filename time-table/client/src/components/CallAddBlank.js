/* eslint-disable jsx-a11y/alt-text */
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
                id="ttlogo2"
                src="./assets/ttlogo5.PNG"
                align="middle"
                className="img-fluid imagespace"
                width="70%"
                height="70%"
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CallAddBlank;
