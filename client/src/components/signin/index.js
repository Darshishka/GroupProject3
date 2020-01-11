import React, { useState } from "react";
import "./index.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { USER, USERDATA, SHOWSIGNUP, DELETEUSER } from "../../actions";
import API from "../../utils/API";
import { useHistory } from 'react-router-dom';
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

function Signin(){  
    const [ error, setError ] = useState({});     
    const dispatch = useDispatch();  
    const handleChange = e => {
        e.persist();
        dispatch(USER(e.target));
    };
    const show = () => {
        dispatch(SHOWSIGNUP());
    };
    const userState = useSelector(state => state.user);   
    const history = useHistory();
    const signIn = e => {
        e.preventDefault();       
        if(!userState.password || !/\S+@\S+\.\S+/.test(userState.email)){
            setError({...error, login: "invalid login" })
        } else {
            let data = {
                email: userState.email, 
                password: userState.password
            };
            API.authenticate(data)
            .then(res => { 
                if(res.data.token){ 
                    const { token, firstName, lastName } = res.data;      
                    localStorage.setItem("jwtToken", token);   
                    // Set token to Auth header
                    setAuthToken(token);        
                    // Decode token to get user data
                    const decoded = jwt_decode(token);                 
                    const userData = {
                        email: decoded.email,
                        iat: decoded.iat,
                        exp: decoded.exp,
                        firstName: firstName,
                        lastName: lastName
                    }  
                    dispatch(USERDATA(userData));  
                    history.push("/main");
                } else {
                    setError({...error, login: "invalid login" });
                    dispatch(DELETEUSER());                   
                }                
            })
            .catch(err => console.log(err))
        }    
    };    
    return (
        <Container id="signInContainer">           
            <Form>
                <Row>
                    <Col>
                        <Col>
                            <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={handleChange} name="email" type="text" placeholder="name@email.com" />
                            {error.login && (<p className="text-danger">{error.login}</p>)}
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleChange} name="password" type="password" />
                            </Form.Group>
                        </Col>
                        <Col className="align-self-center">
                            <Button className="button" variant="none" type="submit" onClick={signIn}>Sign in</Button>
                        </Col>
                        <hr id="hr2"></hr>
                        <Col id="forgot" className="text-center">
                            <Button className="noOutline button" variant="none">Forgot password?</Button>
                        </Col>
                        <h4 id="style" className="h4Style text-center"><em>-</em> or <em>-</em></h4>
                        <Col id="signup" className="text-center">
                            <Button className="button" variant="none" onClick={show}>Sign up</Button>
                        </Col>
                    </Col>
                </Row>      
            </Form>          
        </Container>
    )
};

export default Signin;