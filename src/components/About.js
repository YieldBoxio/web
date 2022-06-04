import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Slide from "react-reveal/Slide";

const About = () => {
  return (
    <div className="bgImg about__section" id="about__section">
      <div className="container-md min-vh-100 d-flex">
        <Row className="w-100 align-items-center">
          <Slide left>
            <div className="col-xl-12 col-lg-12 col-sm-10 text-center about__content">
              <Container>
                <p>
                  “World’s No.1 Yield Box Auto-Staking and Auto-Reflection Protocol (YASAR) with every
                  5-minute Reward and every hour for 7% <span className="BUSD__color">BUSD</span> Reflection”
                </p>
              </Container>
              <Row className="justify-content-center m-0 w-md-75">
                <Col lg="4" md="6" sm="8" className="my-3">
                  <Button className="btn-gradient btn-block btn-lg btn">
                    Buy on Pancakes
                  </Button>
                </Col>
                <Col lg="4" md="6" sm="8" className="my-3">
                  <Button className="btn-gradient btn-block btn-lg btn">
                    Read Whitepaper
                  </Button>
                </Col>
              </Row>
            </div>
          </Slide>
        </Row>
      </div>
    </div>
  );
};

export default About;
