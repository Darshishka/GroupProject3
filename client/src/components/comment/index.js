import React, { useState } from "react";
import "./index.css";
import { Modal, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { CLOSECOMMENT } from "../../actions";
import API from "../../utils/API";

function Post(){  
    const [input, setInput] = useState({});
    const showComment = useSelector(state => state.showComment); 
    const userState = useSelector(state => state.userData); 
    const dispatch = useDispatch();
    const close = () => {
        dispatch(CLOSECOMMENT())
    };   
    const handleSubmit = e => {
        e.preventDefault();
        let data = {
            message: input.comment
        };
        API.comment(userState.email, data)
        .then((res, err) => {
            if(err){console.log(err)}
            console.log(res);
        })
    };
    const handleChange = e => {
        e.persist();
        const { name, value } = e.target;
        setInput(input => ({
            ...input, [name]: value
        })); 
    };
    return (
        <Modal show={showComment} onHide={close}>
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