import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import nftgif from '../assets/img/nft.gif';
import Slide from "react-reveal/Slide";

const Nft = () => {
    return (
        <div className="bgImg nft__section" id="nft__section">
            <div className="container-md min-vh-100 d-flex flex-column justify-content-center align-items-center">
                <Row className="w-100 justify-content-center my-5">
                    <Slide top>
                        <Col className="text-center">
                            <h2>Enjoy Exclusive YieldBox NFT Collection</h2>
                            {/* <p>YieldBox NFT Collection</p> */}
                        </Col>
                    </Slide>
                </Row>

                <Row className=" mt-4 align-items-center">
                    <Col md="8" className="nft-collection-text-box">
                        <Slide left>
                            <ul className="nft__list">
                                <li>Own exclusive NFT collections that uniquely interact with the ecosystem.</li>
                                <li>There are 4 rarities of NFT with different reward rate for owners: Common, Rare, Epic, Immortal.</li>
                                <li>Trade it on our Marketplace OR own it to earn passive income and particiate in our WallStreet Social Game.</li>
                            </ul>
                            <div className="nft-collection-btns">
                                <Link to="" className="btn btn-block btn__learn">Learn More</Link>
                                <Link to="" className="btn btn-block btn__collection">NFT Collection</Link>
                            </div>
                        </Slide>
                    </Col>
                    <Col md="4">
                        <Slide right>
                            <img src={nftgif} className="img-responsive" />
                        </Slide>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Nft;
