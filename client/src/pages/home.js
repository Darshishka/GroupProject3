import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import Signin from "../components/signin/index";
import Signup from "../components/signup";

function Home(){
    return (
        <div id="homeContainer">
            <Container className="text-center">
                <div className="heading">
                    <h2>Welcome to Favorly!</h2>
                    <h5>A place where you can create groups and help others</h5>
                </div>                
            </Container>           
                <Signin />
                <Signup />
        </div>
    )
};

export default Home;