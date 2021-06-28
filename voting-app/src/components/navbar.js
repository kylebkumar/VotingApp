import React from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
//import "./navbar.css";
import { useAuth } from '../contexts/AuthContext';


export default function NavBar(){
    const { currentUser, logout } = useAuth()  

    const navDropDown = 
    <NavDropdown className="mr-auto" title = "Account" id="basic-nav-dropdown">
        <NavDropdown.Item className="mr-auto" href="/account">Account Page</NavDropdown.Item>
        <NavDropdown.Divider />
            <NavDropdown.Item className="mr-auto">{currentUser && currentUser.email}</NavDropdown.Item>
            <NavDropdown.Item className="mr-auto" onClick = { logout }>Log Out</NavDropdown.Item>
    </NavDropdown>
        
        return (
            <Navbar className="navigation" bg="primary" variant="dark" expand="sm">
                <Navbar.Brand className="title" href="/">Go Vote!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="mr-auto">
                       <Nav.Link>Voting Information</Nav.Link>
                       <Nav.Link>Voting Map</Nav.Link>
                       <Nav.Link href= "https://github.com/KylebKumar/VotingApp" target="_blank">Check out our iOS app!</Nav.Link>
                       {currentUser && navDropDown}
                   </Nav>
                    {!currentUser && <Button href="/login" variant="primary">Log In</Button>}
                    {!currentUser && <Button href="/signup" variant="outline-light">Sign Up</Button>}
                </Navbar.Collapse>
            </Navbar>
        );
}
