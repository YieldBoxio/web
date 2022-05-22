import React from 'react';
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import Dashlinkimg from "../../assets/img/Dashlinkimg.png";
import Calculator from "../../assets/img/calculator-link-img.png";
import Swap from "../../assets/img/swap-link-img.png";
import Docs from "../../assets/img/docs-link-img.png";
import Slide from "react-reveal/Slide";

const DashboardSidebar = () => {

    return (
        <Container className='p-0'>
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
                        <img src={Dashlinkimg} /> Claim Reward
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
    )
}

export default DashboardSidebar