import DashboardSidebar from '../../components/DashboardComps/DashboardSidebar'
import DashboardView from '../../components/DashboardComps/DashboardView';
import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Button } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { ethers } from 'ethers';
import CalculatorView from '../../components/DashboardComps/CalculatorView';
import ClaimReward from '../../components/DashboardComps/ClaimReward';
import YieldSwap from '../../components/DashboardComps/YieldSwap';
import { useNavigate } from "react-router-dom";
import DashBTabs from '../../components/DashboardComps/DashBTabs';

const DashboardMainView = () => {

    // const [activeRoute, setActiveRoute] = useState("");

    // useEffect(() =>{
    //     if(navigate== '/dashboard'){
    //         setActiveRoute(<DashboardView />)
    //     }
    // },[])





    return (
        <div className='dashboard-wrapper'>
            <Row className='m-0'>
                {/* <Col xl="2" lg="3" className='dashboard-sidebar'>
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
                                <Button className="connect-yeild-btn" onClick={() => requestMetaMask()}>
                                    Connect
                                </Button>
                            </div>
                            <div className='walletAddress_box'>
                                wallet Address: {walletAddress}
                            </div>
                        </Slide>
                    </Row>
                    <Container>
                        <DashBTabs />
                        <div className='dashboard-main-content'>
                            <YieldSwap />
                        </div>
                    </Container>
                </Col> */}
                <DashBTabs />
            </Row>
        </div>
    )
}

export default DashboardMainView