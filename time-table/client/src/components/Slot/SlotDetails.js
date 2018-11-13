import React, { Component } from "react";
import { Button, Label, Col, Row } from "reactstrap";
import Sidenav from "../SideNav";
import "../../index.css";
import NumPeriods from "./NumPeriods";
import Slots from "./Slots";
import { generate } from "../../utils/generator";

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

  generator(e) {
    e.preventDefault();
    generate(
      [
        {
          teacher: "T1",
          sections: ["12A"],
          subject: "English",
          numLectures: "10",
          numLabs: null
        },
        {
          teacher: "T2",
          sections: ["12A"],
          subject: "Hindi",
          numLectures: "10",
          numLabs: null
        },
        {
          teacher: "T3",
          sections: ["12A"],
          subject: "Maths",
          numLectures: "10",
          numLabs: null
        },
        {
          teacher: "T4",
          sections: ["12A"],
          subject: "Science",
          numLectures: "10",
          numLabs: null
        },
        {
          teacher: "T1",
          sections: ["12B"],
          subject: "English",
          numLectures: "10",
          numLabs: null
        },
        {
          teacher: "T2",
          sections: ["12B"],
          subject: "Hindi",
          numLectures: "10",
          numLabs: null
        },
        {
          teacher: "T3",
          sections: ["12B"],
          subject: "Maths",
          numLectures: "10",
          numLabs: null
        },
        {
          teacher: "T4",
          sections: ["12B"],
          subject: "Science",
          numLectures: "10",
          numLabs: null
        }
      ],
      [8, 8, 8, 8, 8, 5],
      ["T1", "T2", "T3", "T4", "T5", "T6"],
      ["12A", "12B"]
    );
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
            <div style={{ float: "right", marginBottom: "10px" }}>
              <Button onClick={this.generator} className="btn">
                Generate Time-Table
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SlotDetails;
