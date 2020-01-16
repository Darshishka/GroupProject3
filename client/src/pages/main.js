import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import NavTab from "../components/navtab";
import Sidenav from "../components/sidenav";
import AddPost from "../components/addPosts";
import Posts from "../components/showPosts";

function Main(){
    return(
        <div id="mainContainer">
            <NavTab />            
            <Row>
                <Col xs={3}>
                    <Sidenav />
                </Col>
                <Col>
                    <AddPost />
                    <Container id="pageContainer">   
                        <Posts />
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

export default Main;