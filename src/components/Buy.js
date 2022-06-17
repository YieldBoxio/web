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
              {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p> */}
            </Slide>
          </Col>
          <Col xs="12" className="text-center">
            <div className="buy-yield">
              <Col className="yield-column">
                <Slide left>
                  <Card className="text-center text-white p-4">
                    <div className="card__content">
                      <img alt="card img" width={80} src={download} />
                      <h5>Download & setup MetaMask or TrustWallet</h5>
                      <p>
                        Download MetaMask (a crypto wallet in the form of a browser extension) or TrustWallet (an app for
                        your phone). After that you will have to add the Binance Smart Chain to your network-list.
                      </p>
                      <div className="next-move-give">
                        <a href="">MetaMask: Fast Guide Here</a>
                        <a href="">TrustWallet: Fast Guide Here</a>
                      </div>
                    </div>
                  </Card>
                </Slide>
              </Col>
              <Col className="yield-column">
                <Slide bottom>
                  <Card className="text-center text-white p-4">
                    <div className="card__content">
                      <img alt="card img" width={80} src={wallet} />
                      <h5>Buy and send BNB to your Wallet</h5>
                      <p>Buy BNB on an exchange (i.e. Binance, Kraken, Coinbase etc.). Transfer the tokens to your MetaMask wallet address. BEP-20 addresses start with a “0x”.</p>
                    </div>
                  </Card>
                </Slide>
              </Col>
              <Col className="yield-column">
                <Slide left>
                  <Card className="text-center text-white p-4">
                    <div className="card__content">
                      <img alt="card img" width={80} src={sgc} />
                      <h5>Go to PancakeSwap and swap for $YBX</h5>
                      <p>
                        Click here to head on over to PancakeSwap or use this address TBA to select YieldBox. Set the
                        slippage tolerance to 11% (sometimes it may be 15-18%, depending on how much demand there is).
                      </p>
                      <div className="next-move-give">
                        <a href="">PancakeSwap Buy link: TBA</a>
                      </div>
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
