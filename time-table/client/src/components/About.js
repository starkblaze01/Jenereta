import React from "react";
import { Card, CardImg, CardTitle, Row, Col, CardBody } from "reactstrap";
import "../index.css";

function About() {
  return (
    <div className="container page">
      <h1 className="mt-4">About Us</h1>
      <div className="mt-5">
        <Row>
          <Col sm="4">
            {/* <Card className="mb-4"> */}
              <CardImg src="assets/aman.jpg" />
              <CardBody>
                <CardTitle>
                      <strong class="name">Aman Yadav</strong>
                      <br/>
                      <span class="social-media">
                        <a href="https://www.facebook.com/PublicLab/" title="LinkedIn">
                        < i class="fa fa-linkedin-square"></i></a> &nbsp;
                        <a href="https://twitter.com/PublicLab?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="Twitter">
                        <i class="fa fa-twitter"></i></a> &nbsp;
                        <a href="https://github.com/publiclab" title="GitHub"><i class="fa fa-github"></i></a>
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
                      <br/>
                      <span class="social-media">
                       <a href="https://www.facebook.com/PublicLab/" title="LinkedIn">
                       < i class="fa fa-linkedin-square"></i></a> &nbsp;
                       <a href="https://twitter.com/PublicLab?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="Twitter">
                       <i class="fa fa-twitter"></i></a> &nbsp;
                       <a href="https://github.com/publiclab" title="GitHub"><i class="fa fa-github"></i></a>
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
                      <br/>
                      <span class="social-media">
                       <a href="https://www.facebook.com/PublicLab/" title="LinkedIn">
                       < i class="fa fa-linkedin-square"></i></a> &nbsp;
                       <a href="https://twitter.com/PublicLab?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="Twitter">
                       <i class="fa fa-twitter"></i></a> &nbsp;
                       <a href="https://github.com/publiclab" title="GitHub"><i class="fa fa-github"></i></a>
                       </span>
                </CardTitle>
              </CardBody>
            {/* </Card> */}
          </Col>
        </Row>

        <Row>
          <Col sm="4">
            {/* <Card className="mb-4"> */}
              <CardImg src="assets/mayank.jpg" />
              <CardBody>
                <CardTitle>
                      <strong class="name">Mayank Pathela</strong>
                      <br/>
                      <span class="social-media">
                       <a href="https://www.facebook.com/PublicLab/" title="LinkedIn">
                       < i class="fa fa-linkedin-square"></i></a> &nbsp;
                       <a href="https://twitter.com/PublicLab?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="Twitter">
                       <i class="fa fa-twitter"></i></a> &nbsp;
                       <a href="https://github.com/publiclab" title="GitHub"><i class="fa fa-github"></i></a>
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
                      <br/>
                      <span class="social-media">
                       <a href="https://www.facebook.com/PublicLab/" title="LinkedIn">
                       < i class="fa fa-linkedin-square"></i></a> &nbsp;
                       <a href="https://twitter.com/PublicLab?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="Twitter">
                       <i class="fa fa-twitter"></i></a> &nbsp;
                       <a href="https://github.com/publiclab" title="GitHub"><i class="fa fa-github"></i></a>
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
                      <br/>
                      <span class="social-media">
                       <a href="https://www.facebook.com/PublicLab/" title="LinkedIn">
                       < i class="fa fa-linkedin-square"></i></a> &nbsp;
                       <a href="https://twitter.com/PublicLab?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" title="Twitter">
                       <i class="fa fa-twitter"></i></a> &nbsp;
                       <a href="https://github.com/publiclab" title="GitHub"><i class="fa fa-github"></i></a>
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
