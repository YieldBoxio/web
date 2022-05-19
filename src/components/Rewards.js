import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Slide from "react-reveal/Slide";

const Rewards = () => {
  return (
    <div className="bgImg rewards__section" id="rewards__section">
      <div className="container-md min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="my-3 justify-content-center">
          <Col xs="8" className="text-center rewards__content">
            <Slide left>
              <h2>APY/Dual Reward Tax</h2>
            </Slide>
            <Slide right>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
            </Slide>
          </Col>
        </Row>
        <Row className="advantage__table w-100">
          <Col lg="12" md="12">
            <Slide bottom>
              <Table borderless responsive="sm" className="rewards__table align-middle table-responsive">
                <thead>
                  <tr>
                    <td>APY</td>
                    <td>14% <span>Reflection to Holders</span></td>
                    <td>2% <span>Marketing</span></td>
                    <td>1% <span>Liquidity Pool</span></td>
                    <td>1% <span>BuyBack {"&"} Burn</span></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>APY</td>
                    <td>14% <span>Reflection to Holders</span></td>
                    <td>2% <span>Marketing</span></td>
                    <td>1% <span>Liquidity Pool</span></td>
                    <td>1% <span>BuyBack {"&"} Burn</span></td>
                  </tr>
                </tbody>
              </Table>
            </Slide>
          </Col>
        </Row>
      </div>
    </div >
  );
};

export default Rewards;
