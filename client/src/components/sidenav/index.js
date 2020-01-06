import React from "react";
import "./index.css";
import { Container, Row, Col, Accordion, InputGroup, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FILTER } from "../../actions";

function Sidenav (){
    const dispatch = useDispatch();
    const handleChange = e => {
        e.persist();
        dispatch(FILTER(e.target.value));
    };
    return (
        <Container id="sidenavContainer" className="align-left">
            <Row>
                <h3>Filters</h3>
            </Row>
            <Row>
                <Accordion id="filter" defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle id="filterHead" as={Card.Header} eventKey="0">
                    BY CATEGORY
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body id="filterBody">
                            <div className="form-check">
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
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
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="childcare"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Child
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
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
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
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
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
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
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="tools"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Tool
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="yard"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Yard
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="errands"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Errands
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="other"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        Other
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
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
                <Card>
                    <Accordion.Toggle id="filterHead" as={Card.Header} eventKey="1">
                    BY POST TYPE
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body id="filterBody">
                        <div className="form-check">
                            <Row>
                                <label>
                                    <input
                                        onChange={handleChange}
                                        type="radio"
                                        name="postType"
                                        value="favor"
                                        defaultChecked={false}
                                        className="form-check-input"
                                    />
                                    Favors
                                </label>
                            </Row>
                            <Row>
                                <label>
                                    <input
                                        onChange={handleChange}
                                        type="radio"
                                        name="postType"
                                        value="offer"
                                        defaultChecked={false}
                                        className="form-check-input"
                                    />
                                    Offers
                                </label>
                            </Row>
                            <Row>
                                <label>
                                    <input
                                        onChange={handleChange}
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