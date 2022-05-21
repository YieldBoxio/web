import React, { useState } from 'react';
import { Container, Nav, Navbar, Col, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import Dashlinkimg from "../../assets/img/Dashlinkimg.png";
import Calculator from "../../assets/img/calculator-link-img.png";
import Swap from "../../assets/img/swap-link-img.png";
import Docs from "../../assets/img/docs-link-img.png";
import Slide from "react-reveal/Slide";
import DashboardTabs from '../../components/DashboardComps/DashboardCopm';
import { Collapse } from "reactstrap";
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import TabContainer from 'react-bootstrap/TabContainer'

const Dashboard = () => {
    const [show, setShow] = useState(0);
    const [tabKey, initTabKey] = useState('one')
    return (
        <div className='dashboard-wrapper'>
            <TabContainer activeKey={tabKey} onSelect={(e) => initTabKey(e)}>
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
                            <Nav variant="pills" className="flex-column ml-auto dash-nav-links-wrapper">
                                <Slide left>
                                    <NavLink eventKey="first" to="/dashboard" className="nav-link px-3 dash-link active-dash-link">
                                        <img src={Dashlinkimg} /> Dashboard
                                    </NavLink>
                                    <NavLink eventKey="second" to="/dashboard" className="nav-link px-3 dash-link">
                                        <img src={Calculator} /> Calculator
                                    </NavLink>
                                    <NavLink eventKey="third" to="/dashboard" className="nav-link px-3 dash-link">
                                        <img src={Swap} /> Swap
                                    </NavLink>
                                    <NavLink eventKey="forth" to="/dashboard" className="nav-link px-3 dash-link">
                                        <img src={Docs} /> Docs
                                    </NavLink>
                                </Slide>
                            </Nav>
                        </Container>
                    </Col>
                    <Col sm={9} className="dashboard-content-box position-relative">
                        <TabContent >
                            <TabPane eventKey="first">
                                Sonnet
                            </TabPane>
                            <TabPane eventKey="second">
                                Sonnet2
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </TabContainer>
        </div>
    )
}

export default Dashboard