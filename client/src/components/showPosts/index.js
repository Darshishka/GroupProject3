import React, { useState, useEffect } from "react";
import "./index.css";
import { Accordion, Card, Col, Row, Button, Container} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SHOWPOST, SHOWCOMMENT, POSTID } from "../../actions";
import API from "../../utils/API";
import Comment from "../comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faChevronDown, faCarAlt, faBaby, faSchool, faHome, faPaw, faTools, faTree, faShoppingCart, faQuestionCircle, faHandHolding , faHandHoldingHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import Moment from 'react-moment';

function Posts(){
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const showPostState = useSelector(state => state.showPost);
    const showCommentState = useSelector(state => state.showComment); 
    const userState = useSelector(state => state.userData);
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
                .then(res => {                    
                    console.log(res.data);
                    setPosts(res.data)})
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
    const addLike = e => {        
        let id = e.target.id;
        let num = {likes: parseInt(e.target.value) + 1};
        API.likePost(id, num)
        .then(res => {
            API.getPosts()
            .then(res => {   
                setPosts(res.data)})
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    };

    const disLike = e => {   
        let id = e.target.id;
        let num = {likes: parseInt(e.target.value) - 1};
        API.likePost(id, num)
        .then(res => {
            API.getPosts()
            .then(res => {   
                setPosts(res.data)})
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
    };
    const deleteComment = e => {
        let id = e.target.id;
        API.deleteComment(id)
        .then(res => {
            console.log("comment deleted");
            window.location.reload();
        })
        .catch(err => console.log(err))
    };
    const deletePost = e => {
        let id = e.target.id;
        API.deletePost(id)
        .then(res => {
            console.log("post deleted");
            window.location.reload();
        })
        .catch(err => console.log(err))
    };
    const processImage = res => {        
        let imageURL = 'data:image/png;base64,' + Buffer.from(res.data).toString('base64')        
        return imageURL;
    };
    return (
        <Container >            
        <Button id="post" onClick={showPost}>Post</Button>     
        { posts.length > 0 ? (
            <Accordion id="myPosts" defaultActiveKey="0">
                {
                    posts.reverse().map((el, i) => (
                        <Card key={el.id}>
                            <Accordion.Toggle as={Card.Header} eventKey={i}>
                                <Row>
                                    <Col xs={2} lg={1} >  
                                        <div id="userInitial">{el.User.firstName[0]}</div>
                                    </Col>
                                    <Col className="userNameCol" xs={8} lg={9}>                                    
                                        <p id="userName">{el.User.firstName} {el.User.lastName}</p> 
                                    </Col>
                                    <Col xs={2} id="typeAndCategory" className="text-right">
                                        <span className="typeIcon" id="type">
                                        {el.type === "offer" ? (<FontAwesomeIcon icon={faHandHoldingHeart} className="type fa-lg" id="offer"/>) : <FontAwesomeIcon icon={faHandHolding} className="type fa-lg" id="request"/>}    
                                        </span>   
                                        <span className="typeIcon" id="category">                            
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
                                        </span> 
                                  </Col>
                                </Row>
                                <Row>
                                    <Col id="title">
                                        <h4>{el.title}</h4>
                                    </Col> 
                                </Row> 
                                <Row>
                                    <Col>
                                        <p>{el.message}</p>
                                        { el.image ? (
                                            <img src={processImage(el.image)} alt="post photo"/>
                                        ) : null
                                        }                                        
                                    </Col>
                                </Row> 
                                <Row>
                                    <Col className="date">
                                        <Moment format="LL LTS" >{el.createdAt}</Moment>
                                    </Col>                                    
                                </Row>  
                                <Row>                                    
                                    <Col className="align-content-start" xs={9}>
                                        {
                                            userState.email === el.UserEmail ? (
                                                <Button className="like deleteBtn" id={el.id} onClick={deletePost}>Delete </Button>
                                            ) : (
                                                null
                                            )
                                        }
                                        
                                        <Button id={el.id} value={el.likes} className="like" onClick={addLike}><FontAwesomeIcon icon={faHeart}/> Like </Button>
                                        <Button id={el.id} value={el.likes} className="unlike" onClick={disLike}><FontAwesomeIcon icon={faHeartBroken}/> Unlike</Button>
                                        <Button id={el.id} onClick={showComment}><FontAwesomeIcon icon={faComment}/> Comment </Button><FontAwesomeIcon id="chevron" icon={faChevronDown}/>
                                    </Col>
                                    <Comment />
                                    <Col xs={3} className="align-self-end text-right">
                                        <span id="numLikes"><FontAwesomeIcon icon={faHeart}/> {el.likes} </span>
                                        <span id="numComments"><FontAwesomeIcon icon={faComment}/> {el.Comments.length}</span>
                                    </Col>
                                </Row>                 
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey={i}>
                            <Card.Body>
                                {el.Comments.length ? (
                                    el.Comments.map(item => (
                                    <div className="commentBox border" key={item.id}>
                                        <Row>
                                            <Col xs={4}>
                                                <p className="userName">{item.User.firstName} {item.User.lastName}</p>
                                            </Col>
                                            <Col className="text-right">
                                                {
                                                    userState.email === item.UserEmail ? (
                                                        <Button className="deleteBtn" id={item.id} onClick={deleteComment}>Delete</Button>
                                                    ) : (
                                                        null
                                                    )
                                                }
                                            </Col>
                                        </Row>
                                       
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
            <h6 id="noPosts" className="text-right">No posts to display</h6>
        )}
        </Container>
    )
};

export default Posts;