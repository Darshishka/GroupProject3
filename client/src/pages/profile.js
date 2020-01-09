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
    const [ activity, setActivity ] = useState({});
    useEffect(() => {
        API.getUserActivity(userState.email).then(res => {
            console.log(res)
            setActivity(res.data)})
    }, []) 
    return (
        <div id="profilePage">
            <NavTab/>
            <Container id="profileContainer">
                <Row id="imageRow">
                </Row>
                <Row className="profileRow">
                    <Col xs={1}>
                        <FontAwesomeIcon icon={faUserCircle} className="dropdownIcon" />
                    </Col>
                    <Col>
                        <h6 id="profileName">{userState.firstName} {userState.lastName}</h6>
                    </Col>                    
                </Row>       
                <Row className="profileRow">
                    <Col>
                        <h6 className="profileSubHeading">Recent Activity</h6>
                        { activity.length ? (
                            <div>
                                { 
                                    activity.map(el => (
                                        <p>el</p>
                                    ))
                                }
                            </div>
                        ) : null }
                    </Col>                    
                </Row>         
            </Container>
        </div>
    )
};

export default Profile;