import React, {useState} from "react";
import { Nav, Navbar, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { DELETEDATA, DELETEUSER } from "../../actions";
import setAuthToken from "../../utils/setAuthToken";
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCog, faBookmark } from "@fortawesome/free-solid-svg-icons";

function NavTab() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userState =  useSelector(state => state.userData);
    const [ menu, setMenu ] = useState(false);
    const signOut = () => {
        // Remove token from local storage
        localStorage.removeItem("jwtToken");
        // Remove auth header for future requests
        setAuthToken(false);      
        dispatch(DELETEDATA());
        dispatch(DELETEUSER());
        history.push("/main");
    };
    const showMenu = e => {
        e.preventDefault();
        if(menu === false){
            setMenu(true);
        } else {
            setMenu(false)
        }        
    };
    return (
        <div>
        <Navbar collapseOnSelect expand="sm" id="myNavbar">
            <Navbar.Brand id="myBrand"><Link to="/main" id="myLink">FAVORLY</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">Menu</Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link to="/main" className="nav-link" id="signOut">Home</Link>
                    </Nav.Item> 
                    <Nav.Item>
                        <Button onClick={signOut} className="nav-link" id="signOut">Sign Out</Button>
                    </Nav.Item>                     
                    <Nav.Item>
                        <Button className="nav-link" id="profileButton" onClick={showMenu}><FontAwesomeIcon icon={faUserCircle}/></Button>
                    </Nav.Item>                                                     
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        {
            menu ? (
                <div className="menu" onClick={showMenu}> 
                <Row className="dropdownRow">
                    <Col>
                        <p>Welcome, {userState.firstName} {userState.lastName}</p>
                    </Col>
                </Row>
                <Row className="dropdownRow">
                    <Col xs={2}>
                        <FontAwesomeIcon icon={faUserCircle} className="dropdownIcon"/>
                    </Col>
                    <Col>                        
                        <Link to="/profile" id="yourProfile">Your profile</Link>
                    </Col>                
                </Row>               
                <Row className="dropdownRow">
                    <Col xs={2}>
                        <FontAwesomeIcon className="dropdownIcon" icon={faBookmark}/>
                    </Col>
                    <Col className="text-left">
                        <p >Bookmarks</p>
                    </Col>                    
                </Row>
                <Row className="dropdownRow">
                    <Col xs={2}>
                        <FontAwesomeIcon className="dropdownIcon" icon={faCog}/>
                    </Col>
                    <Col>
                        <p>Settings</p>
                    </Col>                    
                </Row>      
                </div> 
            )
            : (
                null
            )
        }     
    </div>
  );
}

export default NavTab;