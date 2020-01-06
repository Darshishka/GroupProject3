import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link} from "react-router-dom";
import "./index.css";
import { useDispatch } from "react-redux";
import { SIGN_OUT } from "../../actions";



function NavTab() {
    const dispatch = useDispatch();
    const signOut = () => {
       dispatch(SIGN_OUT())
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