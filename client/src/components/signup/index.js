import React, { useState } from "react";
import "./index.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { CLOSE, CHANGE } from "../../actions";
import validate from "./validation";
import API from "../../utils/API";

function Signup(){
    const [ errors, setErrors ] = useState({});
    const showState = useSelector(state => state.show);
    const inputState = useSelector(state => state.change);  
    const dispatch = useDispatch();
    const close = () => {
        dispatch(CLOSE())
    };    
    const handleSubmit = e => {   
        let inputValidate = validate(inputState);    
        if(Object.keys(inputValidate).length === 0){         
            API.saveUser(inputState)
            .then(res => {
                if(res.data.email === "email already exists"){
                    setErrors({...errors, email: "email exists" })
                } else {
                    dispatch(CHANGE({}));
                    close();
                    alert("User saved successfully. You may now log in.");
                    setErrors({});
                }
            })
            .catch(err => console.log(err))         
        } else {
            setErrors(validate(inputState));            
        }
        e.preventDefault();
    };
    const handleChange = e => {
        e.persist();
        dispatch(CHANGE(e.target))
    };
    return (
        <Modal show={showState} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Sign up now!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control onChange={handleChange} name="firstName" type="text" placeholder="First name"/>
                            {errors.firstName && (<p className="text-danger">{errors.firstName}</p>)} 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={handleChange} name="lastName" type="text" placeholder="Last name"/>
                            {errors.lastName && (<p className="text-danger">{errors.lastName}</p>)} 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={handleChange} name="email" type="email" placeholder="First name"/>
                            {errors.email && (<p className="text-danger">{errors.email}</p>)} 
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>                           
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password"/>
                            {errors.password && (<p className="text-danger">{errors.password}</p>)} 
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={handleChange} name="confirmPassword" type="password" placeholder="Confirm Password"/>
                            {errors.passwordConfirm && (<p className="text-danger">{errors.passwordConfirm}</p>)}
                        </Form.Group>
                        <Button type="submit" onClick={handleSubmit}>Submit</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Close</Button>               
                </Modal.Footer>
        </Modal>          
    )
};

export default Signup;