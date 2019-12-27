import React, { useState, useEffect } from "react";
import "./index.css";
import { Accordion, Card, Col, Row, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SHOWPOST, SHOWCOMMENT } from "../../actions";
import API from "../../utils/API";

function Posts(){
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const showPostState = useSelector(state => state.showPost);
    const showCommentState = useSelector(state => state.showComment);
    useEffect(() => {
        API.getPosts()
        .then(res => {
            setPosts(res.data);
        })
        .catch(err => console.log(err))
    }, [showPostState, showCommentState])
    const showComment = () => {
        dispatch(SHOWCOMMENT())
    };
    const showPost = () => {
        dispatch(SHOWPOST())
    };  
    return (
        <>
        <Container>
            <Button id="post" onClick={showPost}>Post</Button>    
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
                                    <Col className="text-right"><Button onClick={showComment}>Comment</Button></Col>
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
                                    <div>
                                        <p>{item.message}</p>
                                        <p>{item.firstName} {item.lastName}, {item.dateCreated}</p>
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
            <p>No posts to display</p>
        )}
        </>
    )
};

export default Posts;