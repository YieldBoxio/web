import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Slide from "react-reveal/Slide";

const About = () => {
  return (
    <div className="bgImg about__section" id="about__section">
      <div className="container-md min-vh-100 d-flex">
        <Row className="w-100 align-items-center">
          <Slide left>
            <Col xs="12" className="text-center about__content">
              <Container>
                <p>
                  “World’s No.1 Yield Box Auto-Staking and Auto-Reflection Protocol (YASAR) with every
                  5-minute Reward and every hour for 7% <span className="BUSD__color">BUSD</span> Reflection”
                </p>
              </Container>
              <Row className="justify-content-center">
                <Col lg="4" md="6" sm="12" className="my-3">
                  <Button className="btn-gradient btn-block btn-lg btn">
                    Buy on Pancakes
                  </Button>
                </Col>
                <Col lg="4" md="6" sm="12" className="my-3">
                  <Button className="btn-gradient btn-block btn-lg btn">
                    Read Whitepaper
                  </Button>
                </Col>
              </Row>
            </Col>
          </Slide>
        </Row>
      </div>
    </div>
  );
};

export default About;
