import React from "react";
import { CardImg, CardTitle, Row, Col, CardBody } from "reactstrap";
import "../index.css";

function About() {
  return (
    <div className="container page">
      <h1 className="mt-4">About Us</h1>
      <div className="mt-5">
        <Row>
          <Col sm="4">
            {/* <Card className="mb-4"> */}
            <CardImg src="assets/mayank.jpg" />
            <CardBody>
              <CardTitle>
                <strong class="name">Mayank Pathela</strong>
                <br />
                <span class="social-media">
                  <a
                    href="https://www.linkedin.com/in/mayank-pathela-1a165b154/"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin-square" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://twitter.com/StarkBlaze01" title="Twitter">
                    <i class="fa fa-twitter" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://github.com/starkblaze01" title="GitHub">
                    <i class="fa fa-github" />
                  </a>
                </span>
              </CardTitle>
            </CardBody>
            {/* </Card> */}
          </Col>

          <Col sm="4">
            {/* <Card className="mb-4"> */}
            <CardImg src="assets/kirtika.png" />
            <CardBody>
              <CardTitle>
                <strong class="name">Kirtika Singhal</strong>
                <br />
                <span class="social-media">
                  <a
                    href="https://www.linkedin.com/in/kirtika-singhal-30371416a/"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin-square" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://twitter.com/Kirtika_28" title="Twitter">
                    <i class="fa fa-twitter" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://github.com/singhalkirtika" title="GitHub">
                    <i class="fa fa-github" />
                  </a>
                </span>
              </CardTitle>
            </CardBody>
            {/* </Card> */}
          </Col>
          <Col sm="4">
            {/* <Card className="mb-4"> */}
            <CardImg src="assets/daksh.jpg" />
            <CardBody>
              <CardTitle>
                <strong class="name">Daksh Gondaliya</strong>
                <br />
                <span class="social-media">
                  <a
                    href="https://www.linkedin.com/in/daksh-gondaliya-64625615b/"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin-square" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://twitter.com/gondaliyadaksh" title="Twitter">
                    <i class="fa fa-twitter" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://github.com/DakshGondaliya" title="GitHub">
                    <i class="fa fa-github" />
                  </a>
                </span>
              </CardTitle>
            </CardBody>
            {/* </Card> */}
          </Col>          
        </Row>
        <Row>
          <Col sm="4">
            {/* <Card className="mb-4"> */}
            <CardImg src="assets/aman.jpg" />
            <CardBody>
              <CardTitle>
                <strong class="name">Aman Yadav</strong>
                <br />
                <span class="social-media">
                  <a
                    href="https://www.linkedin.com/in/aman-yadav-4880bb152"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin-square" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://twitter.com/AmanYad64272121" title="Twitter">
                    <i class="fa fa-twitter" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://github.com/amany9000" title="GitHub">
                    <i class="fa fa-github" />
                  </a>
                </span>
              </CardTitle>
            </CardBody>
            {/* </Card> */}
          </Col>

          <Col sm="4">
            {/* <Card className="mb-4"> */}
            <CardImg src="assets/nikhil.jpeg" />
            <CardBody>
              <CardTitle>
                <strong class="name">Nikhil Sachan</strong>
                <br />
                <span class="social-media">
                  <a
                    href="https://www.linkedin.com/in/nikhil-sachan-5184b9155"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin-square" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://twitter.com/NikhilSachan17" title="Twitter">
                    <i class="fa fa-twitter" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://github.com/nikhilsachan007" title="GitHub">
                    {" "}
                    <i class="fa fa-github" />
                  </a>
                </span>
              </CardTitle>
            </CardBody>
            {/* </Card> */}
          </Col>
          <Col sm="4">
            {/* <Card className="mb-4"> */}
            <CardImg src="assets/parmeshwar.jpg" />
            <CardBody>
              <CardTitle>
                <strong class="name">Parmeshwar Kumwat</strong>
                <br />
                <span class="social-media">
                  <a
                    href="https://www.linkedin.com/in/parmeshwar-kumawat-822940174"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin-square" />
                  </a>{" "}
                  &nbsp;
                  <a
                    href="https://www.twitter.com/parmesh68397990"
                    title="Twitter"
                  >
                    <i class="fa fa-twitter" />
                  </a>{" "}
                  &nbsp;
                  <a href="https://www.github.com/parmeshwar01" title="GitHub">
                    <i class="fa fa-github" />
                  </a>
                </span>
              </CardTitle>
            </CardBody>
            {/* </Card> */}
          </Col>
        </Row>

        
      </div>
    </div>
  );
}

export default About;
