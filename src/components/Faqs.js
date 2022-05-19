import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { Collapse } from "reactstrap";
import Slide from "react-reveal/Slide";

class Faqs extends React.Component {
  state = {
    id: "-1",
  };
  render() {
    return (
      <div className="bgImg faqs__section" id="faqs__section">
        <div className="container-md min-vh-100 d-flex flex-column justify-content-center align-items-center">
          <Row className="w-100 justify-content-center">
            <Col xs="8" className="text-center">
              <Slide top>
                <h2>FAQs</h2>
              </Slide>
            </Col>
            <Col md={8} className="mb-3">
              <Slide left>
                <div
                  className="d-flex accordion__faq align-items-center text-center"
                  style={{
                    color: "#fff",
                    border: "none",
                    padding: "16px 20px 10px 20px",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.1)"
                  }}
                  onClick={(e) =>
                    this.setState((prevState) => ({
                      id: prevState.id == "0" ? "-1" : "0",
                    }))
                  }
                >
                  <h6>What does the acronym EASAR stands for?</h6>
                </div>
                <Collapse
                  isOpen={this.state.id == "0"}
                  style={{
                    padding: "16px 20px 10px 20px",
                  }}
                >
                  <p className="text-white mt-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </Collapse>
              </Slide>
            </Col>

            <Col md={8} className="mb-3">
              <Slide right>
                <div
                  className="d-flex accordion__faq align-items-center"
                  style={{
                    color: "#fff",
                    border: "none",
                    padding: "16px 20px 10px 20px",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.1)"
                  }}
                  onClick={(e) =>
                    this.setState((prevState) => ({
                      id: prevState.id == "1" ? "-1" : "1",
                    }))
                  }
                >
                  <h6>Who is EverMint Team?</h6>
                </div>
                <Collapse
                  isOpen={this.state.id == "1"}
                  style={{
                    padding: "16px 20px 10px 20px",
                  }}
                >
                  <p className="text-white mt-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </Collapse>
              </Slide>
            </Col>

            <Col md={8} className="mb-3">
              <Slide left>
                <div
                  className="d-flex accordion__faq align-items-center"
                  style={{
                    color: "#fff",
                    border: "none",
                    padding: "16px 20px 10px 20px",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.1)"
                  }}
                  onClick={(e) =>
                    this.setState((prevState) => ({
                      id: prevState.id == "2" ? "-1" : "2",
                    }))
                  }
                >
                  <h6>Is the team doxed?</h6>
                </div>
                <Collapse
                  isOpen={this.state.id == "2"}
                  style={{
                    padding: "16px 20px 10px 20px",
                  }}
                >
                  <p className="text-white mt-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </Collapse>
              </Slide>
            </Col>

            <Col md={8} className="mb-3">
              <Slide right>
                <div
                  className="d-flex accordion__faq align-items-center"
                  style={{
                    color: "#fff",
                    border: "none",
                    padding: "16px 20px 10px 20px",
                    borderRadius: "1rem",
                    background: "rgba(255,255,255,0.1)"
                  }}
                  onClick={(e) =>
                    this.setState((prevState) => ({
                      id: prevState.id == "3" ? "-1" : "3",
                    }))
                  }
                >
                  <h6>Which Blockchain?</h6>
                </div>
                <Collapse
                  isOpen={this.state.id == "3"}
                  style={{
                    padding: "16px 20px 10px 20px",
                  }}
                >
                  <p className="text-white mt-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </Collapse>
              </Slide>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Faqs;
