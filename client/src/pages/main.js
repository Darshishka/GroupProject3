import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
import NavTab from "../components/navtab";
import Sidenav from "../components/sidenav";
import AllPosts from "../components/allPosts";
import Comment from "../components/comment";
import Post from "../components/post";

function Main(){
    return(
        <>
        <NavTab />
        <Container>
            <Sidenav />
            <AllPosts />
            <Post />
            <Comment />
        </Container>
        </>
    )
}

export default Main;