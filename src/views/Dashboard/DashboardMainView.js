import DashboardSidebar from '../../components/DashboardComps/DashboardSidebar'
import DashboardView from '../../components/DashboardComps/DashboardView';
import React, { useState } from 'react';
import { Container, Col, Row, Button } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { ethers } from 'ethers';
import CalculatorView from '../../components/DashboardComps/CalculatorView';
import ClaimReward from '../../components/DashboardComps/ClaimReward';
import YieldSwap from '../../components/DashboardComps/YieldSwap';


const DashboardMainView = () => {

    const [walletAddress, setWalletAddress] = useState("");

    const connectMeta = async () => {
        console.log('Requesting account...');
        if (window.ethereum) {
            console.log('detected');
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                })
                setWalletAddress(accounts[0]);

            } catch (error) {
                console.log("🚀 ~ Error connecting...", error);
            }
        } else {
            alert('Meta Mask not detected, Please install Meta Mask');
        }
    }

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            await connectMeta();
        }
        const provider = new ethers.providers.web3Provider(window.ethereum)
    }


    return (
        <div className='dashboard-wrapper'>
            <Row className='m-0'>
                <Col xl="2" lg="3" className='dashboard-sidebar'>
                    <Container>
                        <DashboardSidebar />
                    </Container>
                </Col>
                <Col xl="10" lg="9" className='dashboard-content-box position-relative'>
                    <Row className='dashboard-content-box-nav-wrapper'>
                        <Slide top>
                            <div className='dashboard-content-box-nav'>
                                <Col className="dashboard__socials">
                                    <a href="#" className="social__link">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a href="#" className="social__link">
                                        <i className="fa-brands fa-facebook"></i>
                                    </a>
                                    <a href="#" className="social__link">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="#" className="social__link">
                                        <i class="fab fa-medium-m"></i>
                                    </a>
                                    <a href="#" className="social__link">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </Col>
                                <Button className="connect-yeild-btn" onClick={() => connectMeta()}>
                                    Connect
                                </Button>
                            </div>
                        </Slide>
                    </Row>
                    {/* End dashboard Right Nav */}
                    <Container>
                        <div className='dashboard-main-content'>
                            {/* <DashboardView /> */}
                            {/* <CalculatorView /> */}
                            {/* <ClaimReward /> */}
                            <YieldSwap />
                        </div>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default DashboardMainView