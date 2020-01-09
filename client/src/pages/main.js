import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./index.css";
import NavTab from "../components/navtab";
import Sidenav from "../components/sidenav";
import AddPost from "../components/addPosts";
import Posts from "../components/showPosts";

function Main(){
    return(
        <div id="mainContainer">
            <NavTab />
            <Sidenav />
            <AddPost />
            <Container id="pageContainer">   
                <Posts />
            </Container>
        </div>
    )
}

export default Main;