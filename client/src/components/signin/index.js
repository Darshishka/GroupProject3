import React, { useState } from "react";
import "./index.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_IN, USER, USERDATA, SHOW } from "../../actions";
import API from "../../utils/API";
import { useHistory } from 'react-router-dom';

function Signin(){  
    const [ error, setError ] = useState({});     
    const dispatch = useDispatch();  
    const handleChange = e => {
        e.persist();
        dispatch(USER(e.target));
    };
    const show = () => {
        dispatch(SHOW());
    };
    const userState = useSelector(state => state.user);   
    const history = useHistory();
    const signIn = e => {
        e.preventDefault();
        if(!userState.username || !userState.password){
            setError({...error, login: "invalid login" })
        } else {
            API.checkUser(userState.username, userState.password)
            .then(res => {       
                if(res.data.Username === userState.username){                    
                    dispatch(USERDATA(res.data));            
                    dispatch(SIGN_IN());                    
                    history.push("/Account");
                } else {
                    setError({...error, login: "invalid login" })
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
                    </Col>
                    <Col id="rightCol">
                        <Col id="forgot" className="text-center">
                            <Button className="noOutline button" variant="none">Forgot Password?</Button>
                        </Col>
                        <h4 id="style" className="text-center">-- or --</h4>
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