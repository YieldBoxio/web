import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { ethers } from "ethers";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Dashlinkimg from "../../assets/img/Dashlinkimg.png";
import Calculator from "../../assets/img/calculator-link-img.png";
import Swap from "../../assets/img/swap-link-img.png";
import Docs from "../../assets/img/docs-link-img.png";
import Slide from "react-reveal/Slide";
import DashboardView from "./DashboardView";
import ClaimReward from "./ClaimReward";
import CalculatorView from "./CalculatorView";
import YieldSwap from "./YieldSwap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

const DashBTabs = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const requestMetaMask = async () => {
    console.log("Requesting account...");
    if (window.ethereum) {
      console.log("detected");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log("🚀 ~ Error connecting...", error);
      }
    } else {
      alert("Meta Mask not detected, Please install Meta Mask");
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      await requestMetaMask();
    }
    const provider = new ethers.providers.web3Provider(window.ethereum);
  };

  // Responcive querys

  const [width, setWidth] = useState(window.innerWidth);
  const [showTab, setShowTab] = useState(false);
  const breakpoint = 768;

  // React.useEffect(() => {
  //   const handleResizeWindow = () => setWidth(window.innerWidth);
  //    window.addEventListener("resize", handleResizeWindow);
  //    return () => {
  //      window.removeEventListener("resize", handleResizeWindow);
  //    };
  //  }, []);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <>
      <div
        className="responcive_sidebar_btn"
        onClick={() => setShowTab(true)}
      >
        <i class="fas fa-bars"></i>
      </div>
      <Tabs className="dash_view_tabs_row p-0">
        {width > breakpoint ? (
          <TabList className="dashboard-sidebar col-xl-2 com-lg-3">
            <Tab className="px-3 dash-link">
              <img src={Dashlinkimg} /> Dashboard
            </Tab>
            <Tab className="px-3 dash-link">
              <img src={Dashlinkimg} /> Claim Reward
            </Tab>
            <Tab className="px-3 dash-link">
              <img src={Calculator} /> Calculator
            </Tab>
            <Tab className="px-3 dash-link">
              <img src={Swap} /> Swap
            </Tab>
            <Tab className="px-3 dash-link">
              <img src={Docs} /> Docs
            </Tab>
            <Tab className="dash-logo-tab ">
              <Slide left className="yieldbox-dash-logo">
                <NavLink className="navbar-brand text-white" to="/">
                  <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />
                  <span>Yield Box</span>
                </NavLink>
              </Slide>
            </Tab>
          </TabList>
        ) : showTab ? (
          <>
            <TabList className="dashboard-sidebar col-xl-2 com-lg-3">
              <Tab className="px-3 dash-link">
                <img src={Dashlinkimg} /> Dashboard
              </Tab>
              <Tab className="px-3 dash-link">
                <img src={Dashlinkimg} /> Claim Reward
              </Tab>
              <Tab className="px-3 dash-link">
                <img src={Calculator} /> Calculator
              </Tab>
              <Tab className="px-3 dash-link">
                <img src={Swap} /> Swap
              </Tab>
              <Tab className="px-3 dash-link">
                <img src={Docs} /> Docs
              </Tab>
              <Tab className="dash-logo-tab ">
                <Slide left className="yieldbox-dash-logo">
                  <NavLink className="navbar-brand text-white" to="/">
                    <img
                      alt=""
                      src={logo}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />
                    <span>Yield Box</span>
                  </NavLink>
                </Slide>
              </Tab>
            </TabList>
            <i class="fa fa-times crose_btn_dash_tabs" onClick={() => setShowTab(false)}></i>
          </>
        ) : null}
        <div className="col-xl-9 col-lg-9 col-sm-11 dashboard-content-main-wrapper">
          <Row className="dashboard-content-box-nav-wrapper">
            <Slide top className="row m-0">
              <p className="walletAddress_box w-fit-content">
                wallet Address: {walletAddress}
              </p>
              <div className="dashboard-content-box-nav">
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
                <Button
                  className="connect-yeild-btn"
                  onClick={() => requestMetaMask()}
                >
                  Connect
                </Button>
              </div>
            </Slide>
          </Row>
          <TabPanel>
            <DashboardView />
          </TabPanel>
          <TabPanel>
            <ClaimReward />
          </TabPanel>
          <TabPanel>
            <CalculatorView />
          </TabPanel>
          <TabPanel>
            <YieldSwap />
          </TabPanel>
          <TabPanel>
            <h2>Docs</h2>
          </TabPanel>
          <TabPanel></TabPanel>
        </div>
      </Tabs>
    </>
  );
};

export default DashBTabs;
