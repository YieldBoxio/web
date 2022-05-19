import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import download from '../assets/img/download.png'
import wallet from '../assets/img/wallet.png'
import sgc from '../assets/img/sgc.png'
import Slide from "react-reveal/Slide";

const Buy = () => {
  return (
    <div className="bgImg buy__section buy__section-responcive" id="buy__section">
      <div className="container-md min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="w-100 justify-content-center">
          <Col xs="8" className="text-center">
            <Slide top>
              <h2>How to Buy</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
            </Slide>
          </Col>
          <Col xs="12" className="text-center">
            <div className="buy-yield">
              <Col className="yield-column">
                <Slide left>
                  <Card className="text-center text-white p-4">
                    <div className="card__content">
                      <img alt="card img" width={80} src={download} />
                      <h5>Download and setup MetaMask or TrustWallet</h5>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                    </div>
                  </Card>
                </Slide>
              </Col>
              <Col className="yield-column">
                <Slide bottom>
                  <Card className="text-center text-white p-4">
                    <div className="card__content">
                      <img alt="card img" width={80} src={wallet} />
                      <h5>Buy and Send BNB to your Wallet</h5>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                    </div>
                  </Card>
                </Slide>
              </Col>
              <Col className="yield-column">
                <Slide right>
                  <Card className="text-center text-white p-4">
                    <div className="card__content">
                      <img alt="card img" width={80} src={sgc} />
                      <h5>Go to PanecakeSwap and swap for $SGC</h5>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
                    </div>
                  </Card>
                </Slide>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Buy;
