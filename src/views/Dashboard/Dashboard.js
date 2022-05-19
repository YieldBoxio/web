import React from 'react';
import { Container, Nav, Navbar, Col, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import Dashlinkimg from "../../assets/img/Dashlinkimg.png";
import Calculator from "../../assets/img/calculator-link-img.png";
import Swap from "../../assets/img/swap-link-img.png";
import Docs from "../../assets/img/docs-link-img.png";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const Dashboard = () => {
    return (
        <div className='dashboard-wrapper'>
            <Row className='m-0'>
                <Col xl="2" lg="3" className='dashboard-sidebar'>
                    <Container>
                        <Slide left>
                            <NavLink className="navbar-brand text-white" to="/">
                                <img
                                    alt=""
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />{" "}
                                Yield Box
                            </NavLink>
                        </Slide>
                        <Nav className="ml-auto dash-nav-links-wrapper">
                            <Slide left>
                                <NavLink to="/dashboard" className="nav-link px-3 dash-link active-dash-link">
                                    <img src={Dashlinkimg} /> Dashboard
                                </NavLink>
                                <NavLink to="/dashboard" className="nav-link px-3 dash-link">
                                    <img src={Calculator} /> Calculator
                                </NavLink>
                                <NavLink to="/dashboard" className="nav-link px-3 dash-link">
                                    <img src={Swap} /> Swap
                                </NavLink>
                                <NavLink to="/dashboard" className="nav-link px-3 dash-link">
                                    <img src={Docs} /> Docs
                                </NavLink>
                            </Slide>
                        </Nav>
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
                                        {/* <i className="fa-brands fa-medium"></i> */}
                                        <i class="fab fa-medium-m"></i>
                                    </a>
                                    <a href="#" className="social__link">
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                </Col>
                                <Button className="connect-yeild-btn">
                                    Connect
                                </Button>
                            </div>
                        </Slide>
                    </Row>
                    {/* End dashboard Right Nav */}
                    <Container fluid>
                        <div className='dashboard-main-content'>
                            <h2>Dashboard</h2>
                            <div className='Dashboard-card-wrapper row m-0'>
                                <Zoom>
                                    <div className='col-xl-3 col-md-3 col-sm-6 col-12 Dashboard-card'>
                                        <p>$YLD Price</p>
                                        <h5>$ 2.50</h5>
                                    </div>
                                    <div className='col-xl-3 col-md-3 col-sm-6 col-12 Dashboard-card'>
                                        <p>$YLD Price</p>
                                        <h5>$ 2.50</h5>
                                    </div>
                                    <div className='col-xl-3 col-md-3 col-sm-6 col-12 Dashboard-card'>
                                        <p>$YLD Price</p>
                                        <h5>$ 2.50</h5>
                                    </div>
                                    <div className='col-xl-3 col-md-3 col-sm-6 col-12 Dashboard-card'>
                                        <p>$YLD Price</p>
                                        <h5>$ 2.50</h5>
                                    </div>
                                    <div className='col-xl-3 col-md-3 col-sm-6 col-12 Dashboard-card'>
                                        <p>$YLD Price</p>
                                        <h5>$ 2.50</h5>
                                    </div>
                                    <div className='col-xl-3 col-md-3 col-sm-6 col-12 Dashboard-card'>
                                        <p>$YLD Price</p>
                                        <h5>$ 2.50</h5>
                                    </div>
                                    <div className='col-xl-3 col-md-3 col-sm-6 col-12 Dashboard-card'>
                                        <p>$YLD Price</p>
                                        <h5>$ 2.50</h5>
                                    </div>
                                    <div className='col-xl-3 col-md-3 col-sm-6 col-12 Dashboard-card'>
                                        <p>$YLD Price</p>
                                        <h5>$ 2.50</h5>
                                    </div>
                                    <div className='col-xl-3 col-md-3 col-sm-6 col-12 Dashboard-card'>
                                        <p>$YLD Price</p>
                                        <h5>$ 2.50</h5>
                                    </div>
                                </Zoom>
                            </div>
                        </div>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard