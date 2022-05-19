import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import Zoom from 'react-reveal/Zoom';

const Slider = () => {
  return (
    <div className="bgImg slider__section" id="slider__section">
      <Container className="min-vh-100 d-flex">
        <Row className="align-items-center w-100">
          <Col xs="12" className="text-center slider__content">
            <Zoom>
              <div className="d-inline-flex align-items-center justify-content-between">
                <img src={logo} />
                <h2>Yield Box</h2>
              </div>
            </Zoom>
            <h5 className="hero-section-sub-heading">YieldBox . Finance</h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
