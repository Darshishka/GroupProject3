//Form input
    //Title (text)
    //Message (text)
    //Post type (select)
        //Offer
        //Request
    //Catagory (select)
        //Automotive
        //Child
        //Education
        //Home
        //Pet
        //Shopping
        //Tool
        //Yard
import React, {useState} from "react";
import "./index.css";
import { Modal, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { CLOSEPOST } from "../../actions";
import API from "../../utils/API";

function AddPost(){  
    const [input, setInput] = useState({});
    const showPost = useSelector(state => state.showPost);  
    const userState = useSelector(state => state.userData);
    const dispatch = useDispatch();
    const close = () => {
        dispatch(CLOSEPOST())
    };   
    const handleSubmit = e => {
        e.preventDefault();
        API.post(userState.email, input)
        .then(res => {
            close();
            setInput({});
        })
        .catch(err => console.log(err))
    };
    const handleChange = e => {
        e.persist();
        const { name, value } = e.target;
        setInput(input => ({
            ...input, [name]: value
        })); 
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
                    <Form.Label>Category</Form.Label>
                    <Form.Control onChange={handleChange} name="category" as="select">
                        <option>Select a category</option>
                        <option value="landscaping">Landscaping</option>
                        <option value="pets">Pet sitting or walking</option> 
                        <option value="errands">Errands</option>   
                        <option value="other">Other</option>                     
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

export default AddPost;