import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Slide from "react-reveal/Slide";

const Earning = () => {
  return (
    <div className="bgImg earning__section" id="earning__section">
      <div className="container-md min-vh-100 d-flex">
        <Row className="justify-content-center align-items-center w-100">
          <Col xs="12" md="12" lg="6" className="earning__content">
            <Slide right>
              <h2>How much <br /> can I will earn?</h2>
              <ul>
                <li className="d-flex">
                  <div className="left-border-line"></div>
                  <p>
                    At the end of the year and with <span>$1,000 <br /> USD</span> of
                    <span>$MINT</span> invested.
                  </p>
                </li>
                <li className="d-flex">
                  <div className="left-border-line"></div>
                  <p>
                    You can earn up to <span>$3,850,945.80 USD</span> of{" "}
                    <span>
                      $MINT at 385,945.80% APY* plus <br /> an hourly BUSD rewards
                    </span>
                    .
                  </p>
                </li>
              </ul>
              <Row className="earn-button w-100 justify-content-center">
                <Button className="btn-gradient w-auto px-5 btn-lg my-3">
                  Audit Link
                </Button>
              </Row>
            </Slide>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Earning;
