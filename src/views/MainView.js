import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { FullPage, Slide } from "react-full-page/lib";
import About from "../components/About";
import Footer from "../components/global/Footer";
import Navigation from "../components/global/Navigation";
import Slider from "../components/Slider";
import Staking from "../components/Staking";
import Earning from "../components/Earning";
import Documents from "../components/Documents";
import Buy from "../components/Buy";
import Advantage from "../components/Advantage";
import Faqs from "../components/Faqs";
import MobileApp from "../components/MobileApp";
import Rewards from "../components/Rewards";
import Todo from "../components/Todo";
import Tokenomics from "../components/Tokenomics";
import Nft from "../components/Nft";
import SideNavigation from "../components/global/SideNavigation";

const AdminView = (props) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const handleResize = (e) => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  React.useEffect(() => {
    return () => {
      window.addEventListener("resize", handleResize);
    };
  });
  if (windowWidth > 540) {
    return (
      <div className="main__view">
        <Navigation />
        <SideNavigation />
        {/* {windowWidth < 720 ? null : <SideNavigation />} */}
        <Container fluid>
          <Row>
            <Col className='p-0'>
              <FullPage duration={100}>
                <Slide>
                  <Slider />
                </Slide>
                <Slide>
                  <About />
                </Slide>
                <Slide>
                  <Staking />
                </Slide>
                <Slide>
                  <Earning />
                </Slide>
                <Slide>
                  <Tokenomics />
                </Slide>
                <Slide>
                  <Advantage />
                </Slide>
                <Slide>
                  <Rewards />
                </Slide>
                <Slide>
                  <Todo />
                </Slide>
                <Slide>
                  <Documents />
                </Slide>
                <Slide>
                  <Buy />
                </Slide>
                <Slide>
                  <MobileApp />
                </Slide>
                <Slide>
                  <Nft />
                </Slide>
                <Slide>
                  <Faqs />
                </Slide>
              </FullPage>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
  else {
    return (
      <div className="main__view">
        <Navigation />
        <SideNavigation />
        {/* <Container fluid> */}
        <Slider />
        <About />
        <Staking />
        <Earning />
        <Tokenomics />
        <Advantage />
        <Rewards />
        <Todo />
        <Documents />
        <Buy />
        <MobileApp />
        <Nft />
        <Faqs />
        {/* </Container> */}
        <Footer />
      </div>
    )
  }

};

export default AdminView;
