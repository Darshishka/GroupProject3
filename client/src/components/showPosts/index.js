import React, { useState, useEffect } from "react";
import "./index.css";
import { Accordion, Card, Col, Row, Button, Container} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SHOWPOST, SHOWCOMMENT, POSTID } from "../../actions";
import API from "../../utils/API";
import Comment from "../comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faChevronDown, faCarAlt, faBaby, faSchool, faHome, faPaw, faTools, faTree, faShoppingCart, faQuestionCircle, faHandHolding , faHandHoldingHeart,    } from "@fortawesome/free-solid-svg-icons";
import Moment from 'react-moment';

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
            .then(res => {             
                setPosts(res.data)})
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
        <Container >
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
                                    <Col>
                                        <p id="userName">{el.firstName} {el.lastName}</p>
                                    </Col>
                                </Row>
                                <Row>                                    
                                    <Col id="subject">
                                        <h6>{el.title}</h6>
                                    </Col> 
                                </Row>
                                <Row>
                                    <Col>{el.message}</Col>
                                </Row> 
                                <Row>
                                    <Col className="date">
                                        <Moment format="LL LTS" >{el.createdAt}</Moment>
                                    </Col>                                    
                                </Row>  
                                <Row>
                                    <Col className="text-left"><Button id={el.id} onClick={showComment}><FontAwesomeIcon icon={faComment}/> Comment </Button><FontAwesomeIcon id="chevron" icon={faChevronDown}/></Col>
                                    <Comment />
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
                                            <Moment format="LL LTS" className="commentDate date">{item.createdAt}</Moment>
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