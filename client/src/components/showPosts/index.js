import React, { useState, useEffect } from "react";
import "./index.css";
import { Accordion, Card, Col, Row, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SHOWPOST, SHOWCOMMENT, POSTID } from "../../actions";
import API from "../../utils/API";
import Comment from "../comment";

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
        <>
        <Container id="postContainer">
            <Button id="post" onClick={showPost}>POST</Button>    
        </Container>        
        { posts.length ? (
            <Accordion id="myPosts" defaultActiveKey="0">
                {
                    posts.map((el, i) => (
                        <Card key={el.id}>
                            <Accordion.Toggle as={Card.Header} eventKey={i}>
                                <Row>
                                    <Col id="title">{el.title}</Col>
                                    <Col className="text-right">{el.firstName} {el.lastName}</Col>
                                    <Col className="text-right"><Button id={el.id} onClick={showComment}>Comment</Button></Col>
                                    <Comment />
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
                                    <div className="commentBox border">
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
            <h7>No posts to display</h7>
        )}
        </>
    )
};

export default Posts;