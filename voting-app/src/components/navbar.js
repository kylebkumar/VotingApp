import React from "react";
import { Navbar, Nav, Button, Container, NavDropdown} from 'react-bootstrap';
import "./navbar.css";
import { useAuth } from '../contexts/AuthContext';


export default function NavBar(){
    const { currentUser, logout } = useAuth()  
    const accountText = <t style={{color:"white"}}>Account</t>

    const navDropDown = 
    <NavDropdown className="mr-auto" title= { accountText } id="basic-nav-dropdown">
        <NavDropdown.Item href="/account">Account Page</NavDropdown.Item>
        <NavDropdown.Divider />
            <NavDropdown.Item href="/account">{currentUser && currentUser.email}</NavDropdown.Item>
            <NavDropdown.Item onClick = { logout }>Log Out</NavDropdown.Item>
    </NavDropdown>
        
        return (
            <Navbar className="navigation" variant="light" expand="lg">
                <Navbar.Brand className="title" href="/">Go Vote!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="mr-auto">
                    <Container className>
                        <t style={{color:"white", minWidth:"15vh"}}>Voting Information</t>
                        <t style={{color:"white", minWidth:"10vh"}}>Voting Map</t>
                        <a style={{minWidth:"10vh"}}href="www.github.com">Check out our iOS app!</a>
                        {!currentUser && <Button href="/login" variant="link">Log In</Button>}
                        {!currentUser && <Button href="/signup" variant="primary">Sign Up</Button>}
                        {currentUser && navDropDown}
                    </Container>
                   </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
}
