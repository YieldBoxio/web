import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import file from '../assets/img/file.png'
import audit from '../assets/img/audit.png'
import Slide from "react-reveal/Slide";

const Documents = () => {
  return (
    <div className="bgImg documents__section" id="documents__section">
      <div className="container-md min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Row className="w-100 justify-content-center">
          <Col xs="8" className="text-center">
            <Slide top>
              <h2>Documents</h2>
              {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p> */}
            </Slide>
          </Col>
          <Col xs="12" className="text-center">
            <div className="Documents-row">
              <Col lg="2" md="4" className="mb-md-3 mb-sm-3">
                <Slide left>
                  <Card className="text-center text-white p-3 rebase-card">
                    <div className="card__content">
                      <img alt="card img" width={80} src={file} />
                      <h5>Contract<br />Address</h5>
                      <Link className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                    </div>
                  </Card>
                </Slide>
              </Col>
              <Col lg="2" md="4" className="mb-md-3 mb-sm-3">
                <Slide left>
                  <Card className="text-center text-white p-3 rebase-card">
                    <div className="card__content">
                      <img alt="card img" width={80} src={audit} />
                      <h5>Interfi<br />Audit</h5>
                      <Link className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                    </div>
                  </Card>
                </Slide>
              </Col>
              <Col lg="2" md="4" className="mb-md-3 mb-sm-3">
                <Slide bottom>
                  <Card className="text-center text-white p-3 rebase-card">
                    <div className="card__content">
                      <img alt="card img" width={80} src={audit} />
                      <h5>Certik<br />Audit</h5>
                      <Link className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                    </div>
                  </Card>
                </Slide>
              </Col>
              <Col lg="2" md="4" className="mb-md-3 mb-sm-3">
                <Slide right>
                  <Card className="text-center text-white p-3 rebase-card">
                    <div className="card__content">
                      <img alt="card img" width={80} src={file} />
                      <h5>English<br />Whitepaper</h5>
                      <Link className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                    </div>
                  </Card>
                </Slide>
              </Col>
              <Col lg="2" md="4" className="mb-md-3 mb-sm-3">
                <Slide right>
                  <Card className="text-center text-white p-3 rebase-card">
                    <div className="card__content">
                      <img alt="card img" width={80} src={file} />
                      <h5>Chinese<br />Whitepaper</h5>
                      <Link className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                    </div>
                  </Card>
                </Slide>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Documents;
