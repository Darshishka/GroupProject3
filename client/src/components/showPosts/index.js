import React, { useState, useEffect } from "react";
import "./index.css";
import { Accordion, Card, Col, Row, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SHOWPOST, SHOWCOMMENT, POSTID } from "../../actions";
import API from "../../utils/API";
import Comment from "../comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarAlt } from "@fortawesome/free-solid-svg-icons";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faHandHolding } from "@fortawesome/free-solid-svg-icons";

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
        <Button id="post" onClick={showPost}>Post</Button>     
        { posts.length ? (
            <Accordion id="myPosts" defaultActiveKey="0">
                {
                    posts.map((el, i) => (
                        <Card key={el.id}>
                            <Accordion.Toggle as={Card.Header} eventKey={i}>
                                <Row id="title">
                                    <Col id="type titleIcon">{el.type === "offer" ? (<FontAwesomeIcon icon={faHandHoldingHeart} className="type fa-lg" id="offer"/>) : <FontAwesomeIcon icon={faHandHolding} className="type fa-lg" id="request"/>}</Col>
                                    <Col id="category">
                                        {el.category === "automotive" ? (<FontAwesomeIcon icon={faCarAlt} className="category fa-lg" id="automotive"/>) : 
                                        el.category === "child" ? (<FontAwesomeIcon icon={faBaby} className="category fa-lg" id="childcare"/>) : 
                                        el.category === "education" ? (<FontAwesomeIcon icon={faSchool} className="category fa-lg" id="education"/>) : 
                                        el.category === "home" ? (<FontAwesomeIcon icon={faHome} className="category fa-lg" id="home"/>) : 
                                        el.category === "pet" ? (<FontAwesomeIcon icon={faPaw} className="category fa-lg" id="pet"/>) : 
                                        el.category === "tools" ? (<FontAwesomeIcon icon={faTools} className="category fa-lg" id="tools"/>) :
                                        el.category === "yard" ? (<FontAwesomeIcon icon={faTree} className="category fa-lg" id="yard"/>) :
                                        el.category === "errands" ? (<FontAwesomeIcon icon={faShoppingCart} className="category fa-lg" id="errands"/>) :
                                        <FontAwesomeIcon icon={faQuestionCircle} className="category fa-lg" id="other"/>
                                        }
                                    </Col>
                                </Row>
                                <Row>
                                    <Row id="title">
                                        <Col id="subject">
                                            {el.title}
                                        </Col>
                                    </Row>
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