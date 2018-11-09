import React, { Component } from "react";
import { Button, Label, Col, Row, Input, Form, FormGroup } from "reactstrap";
//import { Radio, RadioGroup } from "react-radio-group";
import Sidenav from "./SideNav";
import "../index.css";

function RenderComponent({ selectedOption, handleSubmit, handleInputChange }) {
  if (selectedOption === "option1") {
    return (
      <div className="mt-5">
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Col md={{ size: 2, offset: 3 }}>
              <Label className="dayname" htmlFor="monday">
                Monday
              </Label>
            </Col>
            <Col md={4}>
              <Input
                type="number"
                id="monday"
                name="monday"
                onChange={handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 2, offset: 3 }}>
              <Label className="dayname" htmlFor="tuesday">
                Tuesday
              </Label>
            </Col>
            <Col md={4}>
              <Input
                type="number"
                id="tuesday"
                name="tuesday"
                onChange={handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 2, offset: 3 }}>
              <Label className="dayname" htmlFor="wednesday">
                Wednesday
              </Label>
            </Col>
            <Col md={4}>
              <Input
                type="number"
                id="wednesday"
                name="wednesday"
                onChange={handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 2, offset: 3 }}>
              <Label className="dayname" htmlFor="thursday">
                Thursday
              </Label>
            </Col>
            <Col md={4}>
              <Input
                type="number"
                id="thursday"
                name="thursday"
                onChange={handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 2, offset: 3 }}>
              <Label className="dayname" htmlFor="friday">
                Friday
              </Label>
            </Col>
            <Col md={4}>
              <Input
                type="number"
                id="friday"
                name="friday"
                onChange={handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 2, offset: 3 }}>
              <Label className="dayname" htmlFor="saturday">
                Saturday
              </Label>
            </Col>
            <Col md={4}>
              <Input
                type="number"
                id="saturday"
                name="saturday"
                onChange={handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={{ size: 10, offset: 2 }}>
              <Button type="submit" color="secondary" className="mt-2">
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <Row>
          <Col md={{ size: 3, offset: 0.5 }}>
            <Input type="select" name="classSection">
              <option>Tel.</option>
              <option>Email</option>
            </Input>
          </Col>
          <Col md={{ size: 3, offset: 0.5 }}>
            <Input type="select" name="teacher">
              <option>Tel.</option>
              <option>Email</option>
            </Input>
          </Col>
          <Col md={{ size: 3, offset: 0.5 }}>
            <Input type="select" name="subject">
              <option>Tel.</option>
              <option>Email</option>
            </Input>
          </Col>
          <Col md={{ size: 2, offset: 0.5 }}>
            <Input type="text" name="lectures" placeholder="No. of lectures" />
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

class SlotDetail extends Component {
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

  // handleOptionChange(value) {
  //   this.setState({
  //     selectedOption: value
  //   });
  // }

  // handleInputChange(event) {
  //   // const target = event.target;
  //   // const value = target.value;
  //   // const name = target.name;
  //   // this.setState({
  //   //   [name]: value
  //   // });
  //   this.setState({ [event.target.name]: event.target.value });
  // }

  // handleSubmit(event) {
  //   console.log("current state is: " + JSON.stringify(this.state));
  //   alert("current state is: " + JSON.stringify(this.state));
  //   event.preventDefault();
  // }

  render() {
    return (
      <div className="page">
        <Row className="occupy">
          <Col sm="3">
            <Sidenav />
          </Col>

          <Col sm="9">
            <div className="container mt-5 show">
              <h2 id="addsub"> Add Slot Details</h2>
              <div className="radio choice mt-5">
                <Label>
                  <input
                    type="radio"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                  />
                  Add Number of Periods
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
                  Add Slots
                </Label>
              </div>
              <RenderComponent selectedOption={this.state.selectedOption} />
              {/* <h2 id="addslot">Add Slot Details</h2>
              <div className="mt-5">
                <RadioGroup
                  name="choice"
                  value={this.state.selectedOption}
                  onChange={this.handleOptionChange}
                >
                  <Label className="bt-space">
                    <Radio value="option1" checked/>
                    Add number of periods
                  </Label>
                  <Label className="bt-space">
                    <Radio value="option2" />
                    Add Slots
                  </Label>
                </RadioGroup>
              </div>
              <RenderComponent
                selectedOption={this.state.selectedOption}
                handleSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}
              /> */}
            </div>
            <div style={{ float: "right" }}>
              <Button className="btn">Generate Time-Table</Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SlotDetail;
