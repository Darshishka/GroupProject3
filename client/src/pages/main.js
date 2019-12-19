import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import NavTab from "../components/navtab";
import Sidenav from "../components/sidenav";
import Posts from "../components/posts";

function Main(){
    return(
        <>
        <NavTab />
        <Container>
            <Sidenav />
            <Posts />
        </Container>
        </>
    )
}

export default Main;