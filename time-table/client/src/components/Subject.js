import React, { Component } from "react";
import { Button, Label, Col, Row, Input } from "reactstrap";
import Sidenav from "./SideNav";

function RenderComponent({ selectedOption }) {
  if (selectedOption === "option1") {
    return (
      <div className="mt-5">
        <Row>
          <Col md={{ size: 3, offset: 1 }}>
            <Label>Subject Name</Label>
          </Col>
          <Col md={7}>
            <Input
              type="text"
              id="subjectname"
              name="subjectname"
              placeholder="Subject Name"
            />
          </Col>
          <Col md={{ size: 1, offset: 0.5 }}>
            <Button type="submit" color="primary">
              Add
            </Button>
          </Col>
        </Row>

      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <Row>
          <Col md={{ size: 3, offset: 1 }}>
            <Label className="labelname">Subject Name</Label>
          </Col>
          <Col md={7}>
            <Input
              type="text"
              id="subjectname"
              name="subjectname"
              placeholder="Subject Name"
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={{ size: 3, offset: 1 }}>
            <Label className="labelname">Number of Available Labs</Label>
          </Col>
          <Col md={7}>
            <Input
              type="number"
              id="number"
              name="number"
              placeholder="No. of labs for this subject"
            />
          </Col>
          <Col md={{ size: 1, offset: 0.5 }}>
            <Button type="submit" color="primary">
              Add
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

class Subject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: "option1"
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {
    return (
      <div className="page">
        <Row className="occupy">
          <Col sm="3">
            <Sidenav />
          </Col>

          <Col sm="9">
            <div className="container mt-5 show">
              <h2 id="addsub"> Add Subjects</h2>
              <div className="radio choice mt-5">
                <Label>
                  <input
                    type="radio"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                  />
                  Add Theory Subject
                </Label>
              </div>
              <div className="radio choice">
                <Label>
                  <input
                    type="radio"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOptionChange}
                  />
                  Add Lab
                </Label>
              </div>
              <RenderComponent selectedOption={this.state.selectedOption} />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Subject;
