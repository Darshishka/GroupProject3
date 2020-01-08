import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import NavTab from "../components/navtab";
import Sidenav from "../components/sidenav";
import AddPost from "../components/addPosts";
import Posts from "../components/showPosts";

function Main(){
    return(
        <>
        <NavTab />
        <Sidenav />
        <AddPost />
        <Container>   
            <Posts />
        </Container>
        </>
    )
}

export default Main;