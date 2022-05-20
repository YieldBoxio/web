import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import check from '../assets/img/check.png';
import cross from '../assets/img/cross.png';
import Zoom from 'react-reveal/Zoom';

const Advantage = () => {
  return (
    <div className="bgImg advantage__section" id="advantage__section">
      <div className="container-md min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="my-3">
          <Col xs="12" className="text-center advantage__content">
            <h2>Competitive Advantage</h2>
          </Col>
        </Row>
        <Zoom>
          <Row className="advantage__table">
            <Col lg="12" md="12" className="advantage__table__scroll">
              <Table borderless responsive="sm" className="competitive-table align-middle table-responsive">
                <thead>
                  <tr>
                    <th>Features</th>
                    <th className="table-yield-box"><img src={logo} height="auto" alt="Yield Box" /> Yield Box</th>
                    <th>SAFUU</th>
                    <th>LIBERO</th>
                    <th>TITANO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>APY</td>
                    <td>+1,171,519.70%</td>
                    <td>383025.8%</td>
                    <td>158893.59%</td>
                    <td>102483.58%</td>
                  </tr>
                  <tr>
                    <td>Fees</td>
                    <td>13% / 15%</td>
                    <td>14% / 16%</td>
                    <td>15% / 25%</td>
                    <td>13% / 18%</td>
                  </tr>
                  <tr>
                    <td>Rebase Frequency</td>
                    <td>5 minutes</td>
                    <td>15 minutes</td>
                    <td>30 minutes</td>
                    <td>30 minutes</td>
                  </tr>
                  <tr>
                    <td>Dual Rward</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                  <tr>
                    <td>NFT Collection</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                  <tr>
                    <td>Generate Revenue to Backup High APY</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                  <tr>
                    <td>Cross-chain Bridge</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                  <tr>
                    <td>Social P2E Game</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                  <tr>
                    <td>Automatic Burn</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                  <tr>
                    <td>Sustainable Rebasing</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                  <tr>
                    <td>Auto-Liquidity</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                  <tr>
                    <td>Auto-Staking</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                  <tr>
                    <td>Rug-Proof: No Minting Code</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                  <tr>
                    <td>Rug-Proof: Liquidity Locked</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                  <tr>
                    <td>Rug-Proof: Fixed Rebase Time</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                  <tr>
                    <td>Manual Token Buyback</td>
                    <td><img src={check} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> Yes</td>
                    <td><img src={cross} width="20px" height="auto" alt="Yield Box" /> No</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Zoom>
      </div>
    </div>
  );
};

export default Advantage;
