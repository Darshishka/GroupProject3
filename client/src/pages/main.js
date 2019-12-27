import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import NavTab from "../components/navtab";
import Sidenav from "../components/sidenav";
import Comment from "../components/comment";
import Post from "../components/addPosts";

function Main(){
    return(
        <>
        <NavTab />
        <Sidenav />
        <Container >   
            <AllPosts />
            <Post />
            <Comment />
        </Container>
        </>
    )
}

export default Main;