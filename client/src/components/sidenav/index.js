import React from "react";
import "./index.css";
import { Container, Row, Accordion,  Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FILTER } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarAlt } from "@fortawesome/free-solid-svg-icons";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faHandHolding } from "@fortawesome/free-solid-svg-icons";

function Sidenav (){
    const dispatch = useDispatch();
    const handleChange = e => {
        e.persist();
        dispatch(FILTER(e.target.value));
    };
    return (
        <Container id="sidenavContainer" className="align-left">
            <Row>
                <h3 id="filterHeader">Filters</h3>
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
                                        <FontAwesomeIcon icon={faCarAlt} className="category" id="automotive"/> Automotive
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
                                        <FontAwesomeIcon icon={faBaby} className="category" id="childcare"/> Child
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
                                        <FontAwesomeIcon icon={faSchool} className="category" id="education"/> Education
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
                                        <FontAwesomeIcon icon={faHome} className="category" id="home"/> Home
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
                                        <FontAwesomeIcon icon={faPaw} className="category" id="pet"/> Pet
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
                                        <FontAwesomeIcon icon={faTools} className="category" id="tools"/> Tool
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
                                        <FontAwesomeIcon icon={faTree} className="category" id="yard"/> Yard
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
                                        <FontAwesomeIcon icon={faShoppingCart} className="category" id="errands"/> Errands
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
                                        <FontAwesomeIcon icon={faQuestionCircle} className="category" id="other"/> Other
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
                                    <FontAwesomeIcon icon={faHandHolding} className="category" id="request"/> Requests
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
                                    <FontAwesomeIcon icon={faHandHoldingHeart} className="category" id="offer"/> Offers
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