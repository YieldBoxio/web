import React from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import dummyImg from '../assets/img/liquidity.png'
import rewards from '../assets/img/rewards.png'
import yieldbox from '../assets/img/yieldbox.png'
import yieldinferno from '../assets/img/yieldinferno.png'
import Slide from "react-reveal/Slide";

const Tokenomics = () => {
  return (
    <div className="bgImg tokenomics__section" id="tokenomics__section">
      <div className="container-md min-vh-100 d-flex flex-column justify-content-center">
        <Row className="w-100">
          <Col xs="12" md="6" className="tokenomics__content text-center w-100">
            <h2>Tokenomics</h2>
          </Col>
        </Row>
        <Row className="align-items-center w-100 tokenomics__table-wrapper">
          <Col lg="6" md="12" className="my-3 tokenomics__table">
            <Slide left>
              <Table responsive="sm">
                <tr>
                  <td>Token Name:</td>
                  <td>Yield Box</td>
                </tr>
                <tr>
                  <td>Total Supply:</td>
                  <td>325,000</td>
                </tr>
                <tr>
                  <td>Symbol:</td>
                  <td>$MINT</td>
                </tr>
                <tr>
                  <td>Entry Fee:</td>
                  <td>14%</td>
                </tr>
                <tr>
                  <td>Exit Fee:</td>
                  <td>16%</td>
                </tr>
              </Table>
            </Slide>
          </Col>
          <Col lg="6" md="12" className="my-3">
            <Container fluid className="p-0">
              <Slide right>
                <Row className="my-3 w-100">
                  <Col xs="6">
                    <Card className="text-center text-white p-3">
                      <div className="card__content">
                        <img alt="card img" src={dummyImg} />
                        <h5>Liquidity Pool</h5>
                      </div>
                    </Card>
                  </Col>
                  <Col xs="6">
                    <Card className="text-center text-white p-3">
                      <div className="card__content">
                        <img alt="card img" src={rewards} />
                        <h5>Rewards</h5>
                      </div>
                    </Card>
                  </Col>
                </Row>
                <Row className="my-3 w-100">
                  <Col xs="6">
                    <Card className="text-center text-white p-3">
                      <div className="card__content">
                        <img alt="card img" src={yieldbox} />
                        <h5>Yieldbox Treasury</h5>
                      </div>
                    </Card>
                  </Col>
                  <Col xs="6">
                    <Card className="text-center text-white p-3">
                      <div className="card__content">
                        <img alt="card img" src={yieldinferno} />
                        <h5>Yieldbox Inferno</h5>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Slide>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Tokenomics;
