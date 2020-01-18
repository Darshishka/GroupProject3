import React, {useState} from "react";
import "./index.css";
import { Modal, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { CLOSEPOST } from "../../actions";
import API from "../../utils/API";
import validate from "./validation";

function AddPost(){  
    const [input, setInput] = useState({});
    const [image, setImage] = useState({});
    const [file, setFile] = useState({});
    const [errors, setErrors] = useState({});
    const [fileError, setFileError] = useState("");
    const showPost = useSelector(state => state.showPost);  
    const userState = useSelector(state => state.userData);
    const dispatch = useDispatch();
    let data = new FormData();
    const close = () => {        
        setInput({});
        setFile({});
        setImage({});
        setErrors({});
        setFileError("");
        dispatch(CLOSEPOST());
    };   
    const handleSubmit = e => {
        e.preventDefault();  
        let inputValidate = validate(input);  
        if(Object.keys(inputValidate).length === 0 && fileError.length === 0){
            for(const i in input){
                data.append(i, input[i])
            }   
            console.log(image.length);
            if(image){
                data.append('file', image);
            };
            API.post(userState.email, data)
            .then(res => {
                close();
                setInput({});
                setFile({});
                setImage({});
                setErrors({});
                setFileError("");
            })
            .catch(err => console.log(err))
        } else {
            setErrors(validate(input))
        }       
    };
    const handleChange = e => {
        e.persist();
        const { name, value } = e.target;
        setInput(input => ({
            ...input, [name]: value
        })); 
    };
    const fileUpload = e => {
        setFileError("");
        const files = e.target.files;          
        if(files[0].size <= 65535){
            let src = URL.createObjectURL(files[0]);
            setFile(src);
            setImage(e.target.files[0]);
        } else {
            setFileError("File size is too large. Max size is 64 KB.");
        }     
    };
    const deleteImage = () => {
        setImage({});
        setFile({});
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
                    {errors.type && (<p className="text-danger">{errors.type}</p>)} 
                </Form.Group>
                <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Form.Control onChange={handleChange} name="category" as="select">
                        <option>Select a category</option>
                        <option value="automotive">Automotive</option>     
                        <option value="childcare">Childcare</option>  
                        <option value="tools">Tools</option>    
                        <option value="education">Education</option>     
                        <option value="home">Home</option> 
                        <option value="yard">Landscaping</option>
                        <option value="pet">Pet sitting or walking</option> 
                        <option value="errands">Errands</option>   
                        <option value="other">Other</option>                     
                    </Form.Control>
                    {errors.category && (<p className="text-danger">{errors.category}</p>)} 
                </Form.Group>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={handleChange} name="title" type="text" />    
                    {errors.title && (<p className="text-danger">{errors.title}</p>)}                 
                </Form.Group>  
                <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control onChange={handleChange} name="message" type="text" as="textarea" rows="5" /> 
                    {errors.message && (<p className="text-danger">{errors.message}</p>)}  
                </Form.Group>  
                <Form.Group>    
                    { file.length ? (
                        <div>
                            <img src={file} alt="upload preview" id="previewImg"/>
                            <Button id="deleteImg" onClick={deleteImage}>X</Button>
                        </div>
                           
                    ) : (
                        null
                    )
                    }            
                    <Form.Control type='file' id='single' onChange={fileUpload} />  
                    {fileError && (<p className="text-danger">{fileError}</p>)}                   
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