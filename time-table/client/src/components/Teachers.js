import React, { Component } from "react";
import { Button, Label, Col, Row, Input } from "reactstrap";
import Sidenav from "./SideNav";

class Teacher extends Component {
  render() {
    return (
      <div className="page">
        <Row className="occupy">
          <Col sm="3">
            <Sidenav />
          </Col>

          <Col sm="9">
            <div className="container mt-5 show">
              <h2 id="addteacher">Add Teachers</h2>
              <Row className="mt-5">
                <Col md={{ size: 3, offset: 1 }}>
                  <Label className="labelname">Teacher Name</Label>
                </Col>
                <Col md={7}>
                  <Input
                    type="text"
                    id="teachername"
                    name="teachername"
                    placeholder="Name"
                  />
                </Col>
                <Col md={{ size: 1, offset: 0.5 }}>
                  <Button type="submit" color="primary">
                    Add
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Teacher;
