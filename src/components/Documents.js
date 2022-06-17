import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import file from '../assets/img/file.png';
import audit from '../assets/img/audit.png';
import Slide from "react-reveal/Slide";
// import { useHistory } from 'react-router-dom';

const Documents = () => {
  // const history = useHistory();
  return (
    <div className="bgImg documents__section" id="documents__section">
      <div className="min-vh-100 documents__section__container">
        <Row className="w-100 justify-content-center">
          <Col xs="8" className="text-center">
            <Slide top>
              <h2>Documents</h2>
              {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu m doloremque laudantium, totam rem aperiam, eaque ipsa.</p> */}
            </Slide>
          </Col>
          <Col xs="12" className="text-center">
            <div className="Documents-row flex-wrap">
              <div className="document__card__col">
                <Slide left>
                  <Card className="text-center text-white p-3 rebase-card">
                    <div className="card__content">
                      <img alt="card img" width={80} src={file} />
                      <h5>Contract<br />Address</h5>
                      <Link to="/" className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                    </div>
                  </Card>
                </Slide>
              </div>
              <div className="document__card__col">
                <Slide left>
                  <Card className="text-center text-white p-3 rebase-card">
                    <div className="card__content">
                      <img alt="card img" width={80} src={audit} />
                      <h5>Interfi<br />Audit</h5>
                      <Link to="/" className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                    </div>
                  </Card>
                </Slide>
              </div>
              <div className="document__card__col">
                <Slide bottom>
                  <Card className="text-center text-white p-3 rebase-card">
                    <div className="card__content">
                      <img alt="card img" width={80} src={audit} />
                      <h5>Solid<br />Proof</h5>
                      <Link to="/" className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                    </div>
                  </Card>
                </Slide>
              </div>
              <div className="document__card__col">
                <Slide top>
                  <a href="https://yieldboxio.gitbook.io">
                    <Card className="text-center text-white p-3 rebase-card">
                      <div className="card__content">
                        <img alt="card img" width={80} src={file} />
                        <h5>English<br />Whitepaper</h5>
                        <Link to="/" className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                      </div>
                    </Card>
                  </a>
                </Slide>
              </div>
              <div className="document__card__col">
                <Slide bottom>
                  <Card className="text-center text-white p-3 rebase-card">
                    <div className="card__content">
                      <img alt="card img" width={80} src={file} />
                      <h5>Chinese<br />Whitepaper</h5>
                      <Link to="/" className="btn btn__link"><i class="fa-solid fa-paperclip"></i></Link>
                    </div>
                  </Card>
                </Slide>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Documents;
