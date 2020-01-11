import React, { useState, useEffect } from "react";
import { Container, Col, Row} from "react-bootstrap";
import "./index.css";
import { useSelector } from "react-redux";
import NavTab from "../components/navtab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import API from "../utils/API";

function Profile(){
    const userState = useSelector(state => state.userData);
    const [ activity, setActivity ] = useState({comments: 0,
        posts: 0});
    useEffect(() => {
        API.getUserActivity(userState.email).then(res => {
            let data = res.data;
            if(data[0].Comments || data[0].Posts){
                let numComments = data[0].Comments.length;
                let numPosts = data[0].Posts.length;
                setActivity({
                    comments: numComments,
                    posts: numPosts
                })
            }           
         })
    },[]); 
    return (
        <div id="profilePage">
            <NavTab/>
            <Container id="profileContainer" className="text-left">
                <Row id="imageRow">
                </Row>
                <Row className="nameRow justify-content-left">
                    <Col className="justify-content-left">                        
                        <h4><FontAwesomeIcon icon={faUserCircle} className="dropdownIcon" /> {userState.firstName} {userState.lastName}</h4>
                    </Col>                                      
                </Row>       
                <Row className="actvityRow">
                    <Col>
                        <h6 className="profileSubHeading">Recent Activity</h6>     
                    </Col>                    
                </Row>         
                <Row className="actvityRow">
                    <Col>
                        <p>Posts: {activity.posts}</p>
                    </Col>
                    <Col>
                        <p>Comments: {activity.comments}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Profile;