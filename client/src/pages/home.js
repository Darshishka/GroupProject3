import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import Signin from "../components/signin/index";
import Signup from "../components/signup";

function Home(){
    return (
        <div id="homeContainer">
            <Container className="text-left">
                <div className="heading">
                    <h2>This is the home page that will have the log in</h2>
                    <h4>We'll call the "home" page upon entry something else.</h4>
                </div>                
                <Signin />
                <Signup />
            </Container>           
        </div>
    )
};

export default Home;