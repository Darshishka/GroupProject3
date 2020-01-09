import React, { useState, useEffect } from "react";
import "./index.css";
import { Accordion, Card, Col, Row, Button, Container} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SHOWPOST, SHOWCOMMENT, POSTID } from "../../actions";
import API from "../../utils/API";
import Comment from "../comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

function Posts(){
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const showPostState = useSelector(state => state.showPost);
    const showCommentState = useSelector(state => state.showComment); 
    const filterState = useSelector(state => state.filter);
    useEffect(() => {
        if(filterState.length){
            if(filterState === "favor" || filterState === "offer"){
                API.getPostsType(filterState)
                .then(res => setPosts(res.data))
                .catch(err => console.log(err))
            } else if(filterState === "all"){
                API.getPosts()
                .then(res => setPosts(res.data))
                .catch(err => console.log(err))
            } else {
                API.getPostsCategory(filterState)
                .then(res => setPosts(res.data))
                .catch(err => console.log(err))
            }            
        } else {
            API.getPosts()
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
        }   
    }, [showPostState, showCommentState, filterState])
    const showComment = e => {
        dispatch(POSTID(e.target.id));
        dispatch(SHOWCOMMENT());
    };
    const showPost = () => {
        dispatch(SHOWPOST())
    };  
    return (
        <Container>
        <Button id="post" onClick={showPost}>Post</Button>     
        { posts.length ? (
            <Accordion id="myPosts" defaultActiveKey="0">
                {
                    posts.map((el, i) => (
                        <Card key={el.id}>
                            <Accordion.Toggle as={Card.Header} eventKey={i}>
                                <Row>
                                    <Row id="title">
                                        <Col id="subject">
                                            <h6>{el.title}</h6>
                                        </Col>
                                    </Row>
                                    <Col className="text-right">{el.firstName} {el.lastName}</Col>
                                    <Col className="text-right"><Button id={el.id} onClick={showComment}>Comment</Button></Col>
                                    <Comment />
                                </Row>
                                <Row id="title">
                                    <Col id="type">{el.type === "post" ? (<FontAwesomeIcon icon={faDesktop} className="type"/>) : <FontAwesomeIcon icon={faDesktop} className="type"/>}</Col>
                                    <Col id="category">{el.category === "automotive" ? (<FontAwesomeIcon icon={faDesktop} className="category"/>) : el.category === "child" ? (<FontAwesomeIcon icon={faDesktop} className="category"/>) : el.category === "education" ? (<FontAwesomeIcon icon={faDesktop} className="category"/>) : <FontAwesomeIcon icon={faDesktop} className="category"/>}</Col>
                                </Row>
                                <Row>
                                    <Col>{el.message}</Col>
                                </Row>
                                <Row>
                                    <Col>{el.dateCreated}</Col>
                                </Row> 
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={i}>
                            <Card.Body>
                                {el.Comments.length ? (
                                    el.Comments.map(item => (
                                    <div className="commentBox border" key={item.id}>
                                        <p className="userName">{el.User.firstName} {el.User.lastName}</p>
                                        <div className="userComment">
                                            <p>{item.message}</p>
                                            <p>{item.dateCreated}</p>
                                        </div>
                                    </div>
                                    ))) : (
                                    <p>No comments</p>
                                    )}
                            </Card.Body>                            
                            </Accordion.Collapse>
                        </Card>
                ))}                        
            </Accordion>
        ) : (
            <h6 id="noPosts">No posts to display</h6>
        )}
        </Container>
    )
};

export default Posts;