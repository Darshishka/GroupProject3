import React, { useState } from "react";
import "./index.css";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { CLOSESIGNUP, CHANGE } from "../../actions";
import validate from "./validation";
import API from "../../utils/API";

function Signup(){
    const [ errors, setErrors ] = useState({});
    const showState = useSelector(state => state.showSignup);
    const inputState = useSelector(state => state.change);  
    const dispatch = useDispatch();
    const close = () => {
        dispatch(CLOSESIGNUP())
    };    
    const handleSubmit = e => {   
        e.preventDefault();
        let inputValidate = validate(inputState);    
        if(Object.keys(inputValidate).length === 0){
            API.register(inputState)
            .then(res => {
                if(res.data.email === "email exists"){
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
                            <Form.Label>Cross streets</Form.Label>
                            <Form.Control onChange={handleChange} name="cross" type="text"/>
                            {errors.cross && (<p className="text-danger">{errors.cross}</p>)} 
                            <Form.Text className="text-muted">
                                To ensure you are a part of this neighborhood please list your cross streets (NOT exact address).
                            </Form.Text>
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Person who referred you</Form.Label>
                            <Form.Control onChange={handleChange} name="refer" type="text"/>
                            {errors.refer && (<p className="text-danger">{errors.refer}</p>)} 
                            <Form.Text className="text-muted">
                                To ensure you are a part of this neighborhood please list the person who referred you. If no one referred you, please explain your affiliation with this neighborhood.
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
                        <Button id="submit" type="submit" variant="none" onClick={handleSubmit}>Submit</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>Close</Button>               
                </Modal.Footer>
        </Modal>          
    )
};

export default Signup;