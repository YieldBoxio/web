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
              <h2>How much <br />I can will earn?</h2>
              <ul>
                {/* <li className="d-flex">
                  <div className="left-border-line"></div>
                  <p>
                    At the end of the year and with <span>$1,000 <br /> USD</span> of &nbsp;
                    <span> $ YBX</span> invested.
                  </p>
                </li> */}
                <li className="d-flex">
                  <div className="left-border-line"></div>
                  <p>
                    <span>$ YBX</span> token holders with investment of <span>$100 </span> in &nbsp;
                    <span>
                      $YBX </span> <br /> can easily earn up to <span>$1,171,619.75 USD</span> of <span>$YBX</span> at <span>
                      1,171,519.7%</span> <span>APY plus an hourly 7%</span> <span className="BUSD__color">BUSD</span> &nbsp;
                    reflection.
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
