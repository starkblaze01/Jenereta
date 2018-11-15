import React, { Component } from "react";
import { Label, Col, Row } from "reactstrap";
import Sidenav from "../SideNav";
import "../../index.css";
import NumPeriods from "./NumPeriods";
import Slots from "./Slots";

class SlotDetails extends Component {
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
    function RenderComponent({ selectedOption }) {
      if (selectedOption === "option1") {
        return <NumPeriods />;
      } else {
        return <Slots />;
      }
    }

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
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SlotDetails;
