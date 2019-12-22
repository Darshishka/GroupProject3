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
            <Modal.Title>Post your comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control onChange={handleChange} name="comment" type="text" />                    
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