import React from "react";
import { Card, CardImg, CardTitle, Row, Col, CardBody } from "reactstrap";
import "../index.css";

function About() {
  return (
    <div className="container page">
      <Row>
        <h1 className="mt-4">About Us</h1>
      </Row>

      <Row className="mt-5">
        <Col sm="4">
          <Card className="mb-4">
            <CardImg src="assets/aman.jpg" />
            <CardBody>
              <CardTitle>
                <a href="https://github.com/amany9000">
                  <span className="fa fa-github">
                    <strong>Aman Yadav</strong>
                  </span>
                </a>
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col sm="4">
          <Card className="mb-4">
            <CardImg src="assets/nikhil.png" />
            <CardBody>
              <CardTitle>
                <a href="https://github.com/nikhilsachan007">
                  <span className="fa fa-github">
                    <strong>Nikhil Sachan</strong>
                  </span>
                </a>
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col sm="4">
          <Card className="mb-4">
            <CardImg src="assets/daksh.jpg" />
            <CardBody>
              <CardTitle>
                <a href="https://github.com/DakshGondaliya">
                  <span className="fa fa-github">
                    <strong>DakshKumar Gondaliya</strong>
                  </span>
                </a>
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col sm="4">
          <Card className="mb-4">
            <CardImg src="assets/mayank.jpg" />
            <CardBody>
              <CardTitle>
                <a href="https://github.com/starkblaze01">
                  <span className="fa fa-github">
                    <strong>Mayank Pathela</strong>
                  </span>
                </a>
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col sm="4">
          <Card className="mb-4">
            <CardImg src="assets/kirtika.png" />
            <CardBody>
              <CardTitle>
                <a href="https://github.com/singhalkirtika">
                  <span className="fa fa-github">
                    <strong>Kirtika Singhal</strong>
                  </span>
                </a>
              </CardTitle>
            </CardBody>
          </Card>
        </Col>

        <Col sm="4">
          <Card className="mb-4">
            <CardImg src="assets/parmeshwar.png" />
            <CardBody>
              <CardTitle>
                <a href="https://github.com/parmeshwar01">
                  <span className="fa fa-github">
                    <strong>Parmeshwar Kumwat</strong>
                  </span>
                </a>
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
