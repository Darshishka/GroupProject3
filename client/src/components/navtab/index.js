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
            <Navbar.Brand id="myBrand"><Link to="/" id="myLink">Favorly</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">Menu</Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link to="/" className="nav-link">Page1</Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Link to="/" className="nav-link">Page2</Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Link to="/" className="nav-link">Page3</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/main" className="nav-link" >Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Button onClick={signOut} className="nav-link" >Sign Out</Button>
                    </Nav.Item>                    
                </Nav>
            </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTab;