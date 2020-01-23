import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import NavTab from "../components/navtab";
import Sidenav from "../components/sidenav";
import AddPost from "../components/addPosts";
import Posts from "../components/showPosts";

function Main(){
    return(
        <>
        <NavTab /> 
        <Container id="mainContainer">                       
            <Row id="mainRow">
                <Col className="d-none d-sm-block" sm={3} id="sideNav">
                    <Sidenav />
                </Col>
                <Col>
                    <AddPost />
                    <Posts />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Main;