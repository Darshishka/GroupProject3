import React from "react";
import "./index.css";
import { Modal, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { CLOSEPOST } from "../../actions";

function Post(){  
    const showPost = useSelector(state => state.showPost);  
    const dispatch = useDispatch();
    const close = () => {
        dispatch(CLOSEPOST())
    };   
    const handleSubmit = e => {
        e.preventDefault();
        console.log("placeholder")
    };
    const handleChange = e => {
        console.log("placeholder")
    };
    return (
        <Modal show={showPost} onHide={close}>
        <Modal.Header closeButton>
            <Modal.Title>Add a post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control onChange={handleChange} name="type" as="select">
                        <option>Select a type</option>
                        <option value="favor">I need a favor</option>
                        <option value="offer">I have an offer</option>                       
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={handleChange} name="title" type="text" />                    
                </Form.Group>  
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control onChange={handleChange} name="message" type="text" />                    
                </Form.Group>                 
                <Button type="submit" onClick={handleSubmit}>Submit</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={close}>Close</Button>               
        </Modal.Footer>
    </Modal>          
    )
}

export default Post;