import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

const Navigation = () => {
  return (
    <>
      <Navbar className="fixed-top py-3">
        <Container>
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
          <Nav className="ml-auto">
            <NavLink to="/dashboard" className="nav-link px-3 btn-gradient">
              Dashboard
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
