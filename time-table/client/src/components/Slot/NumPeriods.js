import React, { Component } from "react";
import { Button, Label, Col, Input, Form, FormGroup } from "reactstrap";
// import { connect } from "react-redux";

class NumPeriods extends Component {
  render() {
    return (
      <div className="mt-5">
        <Form //onSubmit={handleSubmit}
        >
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
                // onChange={handleInputChange}
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
                // onChange={handleInputChange}
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
                // onChange={handleInputChange}
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
                //  onChange={handleInputChange}
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
                //  onChange={handleInputChange}
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
                //  onChange={handleInputChange}
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
  }
}

export default NumPeriods;
