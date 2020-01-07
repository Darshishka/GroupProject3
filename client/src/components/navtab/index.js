import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link} from "react-router-dom";
import "./index.css";
import { useDispatch } from "react-redux";
import { DELETEDATA, DELETEUSER } from "../../actions";
import setAuthToken from "../../utils/setAuthToken";
import { useHistory } from 'react-router-dom';



function NavTab() {
    const dispatch = useDispatch();
    const history = useHistory();
    const signOut = () => {
        // Remove token from local storage
        localStorage.removeItem("jwtToken");
        // Remove auth header for future requests
        setAuthToken(false);      
        dispatch(DELETEDATA());
        dispatch(DELETEUSER());
        history.push("/main");
    };
    return (
        <Navbar collapseOnSelect expand="sm" id="myNavbar">
            <Navbar.Brand id="myBrand"><Link to="/" id="myLink">FAVORLY</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">Menu</Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Button onClick={signOut} className="nav-link" id="signOut">Sign Out</Button>
                    </Nav.Item>                    
                </Nav>
            </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTab;