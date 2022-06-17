import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mobilApp from "../assets/img/apps.png";
import Zoom from 'react-reveal/Zoom';
import Slide from "react-reveal/Slide";
import FDroidSVG from "./FDroidSVG";
import ApkSVG from "./ApkSVG";
import ReactTooltip from 'react-tooltip';
import yieldQR from '../assets/img/yieldboxqr.png';


const MobileApp = () => {
  return (
    <div className="bgImg mobileapp__section" id="mobileapp__section">
      <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="w-100 justify-content-center">
          <Col lg="8" xs="12" className="text-center">
            <Slide left>
              <h2>Yieldbox Mobile App</h2>
              {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque
                laudantium, totam rem aperiam, eaque ipsa.</p> */}
            </Slide>
            <Slide left>
              <div className="app-butns">
                <div className="app-btn-box">
                  <button type="button" class="btn-gradient w-auto btn-lg my-3">
                    <i class="fab fa-google-play"></i> Google Play
                  </button>
                  <p><FDroidSVG /> Get it on F-Droid</p>
                </div>
                <div className="app-btn-box">
                  <button type="button" class="btn-gradient px-4 w-auto btn-lg my-3">
                    <i class="fab fa-app-store"></i> App Store
                  </button>
                  <p><ApkSVG /> Download APK file</p>
                </div>
                <button data-tip="hello world" type="button" class="qrbtn w-auto btn-lg h-fit-content">
                  <img src={yieldQR} />
                </button>
                <ReactTooltip className="tooltip-main-box">
                  <div className="tooltip-qr-wrapper">
                    <img src={yieldQR} />
                  </div>
                </ReactTooltip>
              </div>
            </Slide>
            <Zoom>
              <div className="mobilApp mobilApp-width">
                <img src={mobilApp} />
              </div>
            </Zoom>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MobileApp;
