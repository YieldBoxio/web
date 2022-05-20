import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { Collapse } from "reactstrap";
import Slide from "react-reveal/Slide";

class Faqs extends React.Component {
  state = {
    id: "-1",
  };
  render() {
    return (
      <div className="bgImg faqs__section" id="faqs__section">
        <div className="container-md min-vh-100 d-flex flex-column justify-content-center align-items-center">
          <Row className="w-100 justify-content-center">
            <Col xs="8" className="text-center">
              <Slide top>
                <h2>FAQs</h2>
              </Slide>
            </Col>
            <Col md={8} className="mb-3">
              <Slide left>
                <div
                  className="d-flex accordion__faq align-items-center text-center"
                  style={{
                    color: "#fff",
                    border: "none",
                    padding: "16px 20px 10px 20px",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.1)"
                  }}
                  onClick={(e) =>
                    this.setState((prevState) => ({
                      id: prevState.id == "0" ? "-1" : "0",
                    }))
                  }
                >
                  <h6>Is $YBX SAFE?</h6>
                </div>
                <Collapse
                  isOpen={this.state.id == "0"}
                  style={{
                    padding: "16px 20px 10px 20px",
                  }}
                >
                  <p className="text-white mt-3">
                    <ul>
                      <li>Audited by SolidProof: TBA Transparent: source code is opened & verified</li>
                      <li>Liquidity Locked for 200 years</li>
                      <li>No Team & Private Sale Tokens. No minting code.</li>
                    </ul>
                  </p>
                </Collapse>
              </Slide>
            </Col>

            <Col md={8} className="mb-3">
              <Slide right>
                <div
                  className="d-flex accordion__faq align-items-center"
                  style={{
                    color: "#fff",
                    border: "none",
                    padding: "16px 20px 10px 20px",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.1)"
                  }}
                  onClick={(e) =>
                    this.setState((prevState) => ({
                      id: prevState.id == "1" ? "-1" : "1",
                    }))
                  }
                >
                  <h6>What Is Fair Launch?</h6>
                </div>
                <Collapse
                  isOpen={this.state.id == "1"}
                  style={{
                    padding: "16px 20px 10px 20px",
                  }}
                >
                  <p className="text-white mt-3">
                    When we say Fair Launch, we mean: A decentralized crypto network that is earned, owned and governed by the community from the outset. Everyone can participate on equal footing. There is no early access, pre-mine or allocation of tokens.
                    No min/max buy in YieldBox Fair launch.
                    Fair Launch Link On Pink Sale: TBA
                  </p>
                </Collapse>
              </Slide>
            </Col>

            <Col md={8} className="mb-3">
              <Slide left>
                <div
                  className="d-flex accordion__faq align-items-center"
                  style={{
                    color: "#fff",
                    border: "none",
                    padding: "16px 20px 10px 20px",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.1)"
                  }}
                  onClick={(e) =>
                    this.setState((prevState) => ({
                      id: prevState.id == "2" ? "-1" : "2",
                    }))
                  }
                >
                  <h6>What are the benefits of early investors in Fair Launch?</h6>
                </div>
                <Collapse
                  isOpen={this.state.id == "2"}
                  style={{
                    padding: "16px 20px 10px 20px",
                  }}
                >
                  <p className="text-white mt-3">
                    <ul>
                      <li>No buy tax (13%) if you buy in fair launch</li>
                      <li>Airdrop NFT contest for top fair launch buyers. Details: </li>
                    </ul>
                    <strong>NFT Airdrop For Fair Launch Contributors</strong>
                    <p>
                      Top20 Fair Launch Contributors: 1 Random NFT Immortal each person
                      Top 21-100 Fair Launch Contributors: 1 Random NFT Epic each person
                      Top 101-200 Fair Launch Contributors: 1 Random NFT Rare each person
                      Other contributors: 1 Random NFT Common each person (Min contribute
                      0.1 BNB for being eligible - Max 500 Common NFTs will be airdropped.
                      If there are more eligible contributors than the total number of NFT
                      airdropped, NFT Common will airdrop to random contributors who
                      contributed more than 0.1 BNB)
                    </p>
                  </p>
                </Collapse>
              </Slide>
            </Col>

            <Col md={8} className="mb-3">
              <Slide right>
                <div
                  className="d-flex accordion__faq align-items-center"
                  style={{
                    color: "#fff",
                    border: "none",
                    padding: "16px 20px 10px 20px",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.1)"
                  }}
                  onClick={(e) =>
                    this.setState((prevState) => ({
                      id: prevState.id == "3" ? "-1" : "3",
                    }))
                  }
                >
                  <h6>Many projects with no hard cap dumped at listing, what YBX Team will do to prevent this problem?</h6>
                </div>
                <Collapse
                  isOpen={this.state.id == "3"}
                  style={{
                    padding: "16px 20px 10px 20px",
                  }}
                >
                  <p className="text-white mt-3">
                    Listing on Pancakeswap will trigger our Bullrun Campaign which included
                  </p>
                  <ul>
                    <li>
                      Dextools, poocoin, other crypto related sites,... banner ads with insanely high budget.
                    </li>
                    <li>
                      Voice AMA tour with big communities.
                    </li>
                    <li>
                      Release YBX Referral Program at the listing date tentatively.
                    </li>
                    <li>
                      Big contest for top buyers (more detail be revealed at Listing Date)
                    </li>
                    <li>
                      Snapshot Top Holders For NFT Airdrop
                    </li>
                    <li>
                      Twitter, Youtube, Influencers Marketing (they are ready to call after launch
                    </li>
                  </ul>
                </Collapse>
              </Slide>
            </Col>
            <Col md={8} className="mb-3">
              <Slide left>
                <div
                  className="d-flex accordion__faq align-items-center"
                  style={{
                    color: "#fff",
                    border: "none",
                    padding: "16px 20px 10px 20px",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.1)"
                  }}
                  onClick={(e) =>
                    this.setState((prevState) => ({
                      id: prevState.id == "4" ? "-1" : "4",
                    }))
                  }
                >
                  <h6>Tax and Slippage Fee?</h6>
                </div>
                <Collapse
                  isOpen={this.state.id == "4"}
                  style={{
                    padding: "16px 20px 10px 20px",
                  }}
                >
                  <p className="text-white mt-3">
                    13% Buy Tax
                  </p>
                  <p className="text-white mt-3">
                    15% Sell Tax
                  </p>
                </Collapse>
              </Slide>
            </Col>
            <Col md={8} className="mb-3">
              <Slide right>
                <div
                  className="d-flex accordion__faq align-items-center"
                  style={{
                    color: "#fff",
                    border: "none",
                    padding: "16px 20px 10px 20px",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.1)"
                  }}
                  onClick={(e) =>
                    this.setState((prevState) => ({
                      id: prevState.id == "5" ? "-1" : "5",
                    }))
                  }
                >
                  <h6>Is it launched?</h6>
                </div>
                <Collapse
                  isOpen={this.state.id == "5"}
                  style={{
                    padding: "16px 20px 10px 20px",
                  }}
                >
                  <p className="text-white mt-3">
                    We're getting ready for our Fair Launch on Pinksale.
                  </p>
                  <p className="text-white mt-3">
                    1 – How does the Dual Rebase work?
                  </p>
                  <p className="text-white mt-3">
                    1’ – The Rebase operation allows tokens to work in a way that the circulating supply expands or
                    contracts due to changes in token price. This increase or decrease in supply works with a mechanism
                    called rebasing. YASAR uses a Positive Rebase formula which increases the $YBX supply of each holder
                  </p>
                  <b className="text-white mt-3">
                    2 – What is BUSD Reflection and how do I get that ?
                  </b>
                  <p className="text-white mt-3">
                    2’ – $YBX is the next generation of reflection token: the first Binance Pegged USD ($BUSD) reflection
                    token to optimize user profits both now and in the future. Simply hold $YBX tokens to automatically
                    receive a proportional share of 7% of every transaction in $BUSD. This is automatically transferred
                    to your wallet every 60 minutes.
                  </p>
                  <b className="text-white mt-3">
                    3 – How to Stake
                  </b>
                  <p className="text-white mt-3">
                    3’ – The $YBX has created an innovative AutoStaking token that provides users a simpler way to receive
                    staking rewards. Simply hold $YBX in your wallet and you will automatically receive Dual staking
                    rewards.
                  </p>
                  <b className="text-white mt-3">
                    4 - How do I get my Dual Rebase rewards?
                  </b>
                  <p className="text-white mt-3">
                    4’ – The Dual Rebase rewards, in simple terms, are the staking rewards. You are entitled to receive Dual
                    Rebase Rewards just by holding $YBX in your wallet.
                  </p>
                  <p className="text-white mt-3">
                    5 – Where can I buy $YBX tokens?
                  </p>
                  <p className="text-white mt-3">
                    5’ – The $YBX token is available on PancakeSwap. (but wait for our presale on pinksale finish first)
                  </p>
                </Collapse>
              </Slide>
            </Col>
            <Col md={8} className="mb-3">
              <Slide left>
                <div
                  className="d-flex accordion__faq align-items-center"
                  style={{
                    color: "#fff",
                    border: "none",
                    padding: "16px 20px 10px 20px",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.1)"
                  }}
                  onClick={(e) =>
                    this.setState((prevState) => ({
                      id: prevState.id == "7" ? "-1" : "7",
                    }))
                  }
                >
                  <h6>Is it listed on CG/CMC?</h6>
                </div>
                <Collapse
                  isOpen={this.state.id == "7"}
                  style={{
                    padding: "16px 20px 10px 20px",
                  }}
                >
                  <p className="text-white mt-3">
                    CMC - After Listing on PCS CG - After Listing on PCS
                  </p>
                </Collapse>
              </Slide>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Faqs;
