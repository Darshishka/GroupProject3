import React from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import Signin from "../components/signin/index";
import Signup from "../components/signup";
import Logo from "../components/signin/favorlyHands.png";

function Home(){
    return (
        <div id="homeContainer" style={{ background: '#0e464c' }}>
            <Container className="text-center" style={{ background: '#0e464c' }}>
                <div className="heading">
                    <img src={Logo} alt="logo"></img>
                    <h2>FAVORLY</h2>
                    <hr></hr>
                    <h5>A message board to</h5>
                    <h5>get or give a helping hand</h5>
                </div>                
            </Container>           
                <Signin />
                <Signup />
        </div>
    )
};

export default Home;