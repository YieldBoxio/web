import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import TabPane from 'react-bootstrap/TabPane';
import { Row, Col, Nav } from 'reactstrap';
import TabContent from 'react-bootstrap/TabContent';
import { NavItem } from 'react-bootstrap';
const DashboardTabs = () => {

    return (
        <TabContainer id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <NavItem>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </NavItem>
                        <NavItem>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </NavItem>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <TabContent>
                        <TabPane eventKey="first">
                            <p>
                                Those lines that I before have writ do lie, Even those that said I could not love you
                                dearer: Yet then my judgment knew no reason why My most full flame should afterwards
                                burn clearer. But reckoning Time, whose million'd accidents Creep in 'twixt vows, and
                                change decrees of kings, Tan sacred beauty, blunt the sharp'st intents, Divert strong
                                minds to the course of altering things; Alas! why fearing of Time's tyranny, Might I not
                                then say, 'Now I love you best,'
                            </p>
                        </TabPane>
                        <TabPane eventKey="second">
                            <p>
                                Those lines that I before have writ do lie, Even those that said I could not love you
                                dearer: Yet then my judgment knew no reason why My most full flame should afterwards
                                burn clearer. But reckoning Time, whose million'd accidents Creep in 'twixt vows, and
                                change decrees of kings, Tan sacred beauty, blunt the sharp'st intents, Divert strong
                                minds to the course of altering things; Alas! why fearing of Time's tyranny, Might I not
                                then say, 'Now I love you best,'
                            </p>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </TabContainer>
    )
}

export default DashboardTabs