import React from "react";
import "./index.css";
import { Container, Row, Col } from "react-bootstrap";

function Sidenav (){
    return (
        <Container id="sidenavContainer" className="align-left">
            <Row>
                <p>Offers</p>             
            </Row>
            <Row>
                <p>Requests</p>             
            </Row>
            <Row>
                <p>All Posts</p>
            </Row>
        </Container>

    )
};

export default Sidenav;