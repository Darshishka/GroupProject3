import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import NavTab from "../components/navtab";
import Sidenav from "../components/sidenav";
import AllPosts from "../components/allPosts";
import Post from "../components/post";
//I did not do a very good job getting the sidenav and posts to align nicely, just threw it together. There's probably a much better way
function Main(){
    return(
        <>
        <NavTab />
        <Sidenav />
        <Container >   
            <AllPosts />
            <Post />
        </Container>
        </>
    )
}

export default Main;