import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Slide from "react-reveal/Slide";

const Rewards = () => {
  return (
    <div className="bgImg rewards__section" id="rewards__section">
      <div className="container-md min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="my-3 justify-content-center">
          <Col className="text-center rewards__content">
            <Slide left>
              <h2>Entry/Exit Fee Break Down</h2>
            </Slide>
            {/* <Slide right>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
            </Slide> */}
          </Col>
        </Row>
        <div className="advantage__table w-100 p-0">
          <Col lg="12" md="12">
            <Slide bottom>
              <Table borderless responsive="sm" className="p-0 rewards__table align-middle table-responsive">
                <thead>
                  <tr>
                    <td>Entry 13%</td>
                    <td>7% <span>BUSD Reward</span></td>
                    <td>4% <span>Auto-Liquidity</span></td>
                    <td>1% <span>YieldBox Treasury</span></td>
                    <td>1% <span>The Bonfire</span></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="red-color danger">Exit <span className="down-fall">15%</span></td>
                    <td>7% <span>BUSD Reward</span></td>
                    <td>4% <span>Auto-Liquidity</span></td>
                    <td>3% <span>YieldBox Treasury</span></td>
                    <td>1% <span>The Bonfire</span></td>
                  </tr>
                </tbody>
              </Table>
            </Slide>
          </Col>
        </div>
      </div>
    </div >
  );
};

export default Rewards;
