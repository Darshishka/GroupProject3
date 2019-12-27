import React from "react";
import "./index.css";
import { Container, Row, Col, Accordion, InputGroup, Card } from "react-bootstrap";

function Sidenav (){
    return (
        <Container id="sidenavContainer" className="align-left">
            <Row>
                <h3>Filters</h3>
            </Row>
            <Row>
                <Accordion id="filter" defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle id="filterHead" as={Card.Header} eventKey="0">
                    By Catagory
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className="form-check">
                                <Row>
                                    <label>
                                        <input
                                            type="radio"
                                            name="catagory"
                                            value="automotive"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Automotive
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            type="radio"
                                            name="catagory"
                                            value="child"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Child
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            type="radio"
                                            name="catagory"
                                            value="education"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Education
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            type="radio"
                                            name="catagory"
                                            value="home"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Home
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            type="radio"
                                            name="catagory"
                                            value="pet"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Pet
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            type="radio"
                                            name="catagory"
                                            value="shopping"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Shopping
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            type="radio"
                                            name="catagory"
                                            value="tool"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Tool
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            type="radio"
                                            name="catagory"
                                            value="yard"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Yard
                                    </label>
                                </Row>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    By Post Type
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <div className="form-check">
                            <Row>
                                <label>
                                    <input
                                        type="radio"
                                        name="postType"
                                        value="requests"
                                        defaultChecked={false}
                                        className="form-check-input"
                                    />
                                    Requests
                                </label>
                            </Row>
                            <Row>
                                <label>
                                    <input
                                        type="radio"
                                        name="postType"
                                        value="offers"
                                        defaultChecked={false}
                                        className="form-check-input"
                                    />
                                    Offers
                                </label>
                            </Row>
                            <Row>
                                <label>
                                    <input
                                        type="radio"
                                        name="postType"
                                        value="all"
                                        defaultChecked={false}
                                        className="form-check-input"
                                    />
                                    All
                                </label>
                            </Row>
                        </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </Row>
        </Container>

    )
};

export default Sidenav;