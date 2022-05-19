import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import apy from "../assets/img/apy.png";
import autostaking from "../assets/img/autostaking.png";
import reflection from "../assets/img/reflection.png";
import Slide from "react-reveal/Slide";
import Zoom from 'react-reveal/Zoom';
import CountUp from 'react-countup';

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
                <p>FIRST REBASE AUTO-STAKING WITH BUSD REFLECTION</p>
              </Slide>
              <Zoom className="count-flex-box">
                <h2>+
                  <CountUp
                    className="custom-count rebase-count"
                    start={0}
                    end={117151970}
                    duration={2.75}
                    useEasing={true}
                    separator=" "
                    decimal=","
                    onComplete={onComplete}
                    onStart={onStart}
                  />
                  %</h2>
              </Zoom>
              <Slide bottom>
                <p>
                  Paid every 5 minutes, and a simple buy-hold-earn system that grows your $BUSD and $YBX portfolio in your wallet at a lightning fast pace.
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
