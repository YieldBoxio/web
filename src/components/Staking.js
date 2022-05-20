import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import apy from "../assets/img/apy.png";
import autostaking from "../assets/img/autostaking.png";
import reflection from "../assets/img/reflection.png";
import Slide from "react-reveal/Slide";
import Zoom from 'react-reveal/Zoom';
import CountUp from 'react-countup';
import YieldCount from "./YieldCount";

const Staking = () => {
  const onComplete = () => {
    console.log('Completed! ð');
  };

  const onStart = () => {
    console.log('Started! ð¨');
  };
  return (
    <div className="bgImg staking__section" id="staking__section">
      <div className="container-md min-vh-100 d-flex">
        <Row className="align-items-center w-100">
          <Col xs="12" className="text-center staking__content">
            <div className="container-md px-md-5">
              <Slide top>
                <p>Fastest Dual Rebase🏃‍♀️ Auto-Staking and Auto-Reflection Protocol (YASAR) </p>
              </Slide>
              <Zoom className="count-flex-box">
                {/* <span>+</span>
                <span>%</span> */}
                <YieldCount />
              </Zoom>
              <Slide bottom>
                <p>
                  Extensively compound the investments and returns, results as rewards every 5 minutes, 288 times daily and
                  7% BUSD reflection every 60 minutes, 24 times a day.
                </p>
              </Slide>
              <Slide bottom>
                <Row className="justify-content-center">
                  <Col lg="3" md="6" sm="12" className="my-3 mb-md-2 mb-sm-2">
                    <Card
                      className="text-center rebase-card"
                    >
                      <Card.Body>
                        <img src={apy} width="auto" height="70px" />
                        <Card.Text>HIGHEST APY<br />PROTOCOL</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="3" md="6" sm="12" className="my-3 mb-md-2 mb-sm-2">
                    <Card
                      className="text-center rebase-card"
                    >
                      <Card.Body>
                        <img src={autostaking} width="auto" height="70px" />
                        <Card.Text>Auto-Stake <br /> Auto-Compound</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg="3" md="6" sm="12" className="my-3 mb-md-2 mb-sm-2">
                    <Card
                      className="text-center rebase-card"
                    >
                      <Card.Body>
                        <img src={reflection} width="auto" height="70px" />
                        <Card.Text>Hourly BUSD<br />Reflection</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Slide>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Staking;
