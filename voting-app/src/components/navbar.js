import React from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap';
//import "./navbar.css";
import { useAuth } from '../contexts/AuthContext';
import brand from './goVoteBrand2.png'


export default function NavBar(){
    const { currentUser, logout } = useAuth()  

    const navDropDown = 
    <NavDropdown title = { currentUser && currentUser.email } drop="left" id="basic-nav-dropdown">
        <NavDropdown.Item href="/account">Account</NavDropdown.Item>
        <NavDropdown.Divider />
            <NavDropdown.Item onClick = { logout } href="/">Log Out</NavDropdown.Item>
    </NavDropdown>
        
        return (
            <Navbar className="navigation" bg="primary" variant="dark" expand="sm">
                 <a href="/">
                    <img style={{ height:"60px"}} src={brand} alt="None"></img>
                 </a>
                {/* <Navbar.Brand className="title" href="/">Go Vote!</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="mr-auto">
                       <Nav.Link href="/voting-info">Voting Information</Nav.Link>
                       <Nav.Link href="/map">Voting Map</Nav.Link>
                       <Nav.Link href= "https://github.com/KylebKumar/VotingApp" target="_blank">Check out our iOS app!</Nav.Link>
                   </Nav>
                   <Nav className="ml-auto">
                    <div style={{paddingRight: "1em"}}>
                        {!currentUser && <Button href="/login" variant="primary">Log In</Button>}
                    </div>
                    <div>
                        {!currentUser && <Button href="/signup" variant="outline-light">Sign Up</Button>}
                    </div>
                    {currentUser && navDropDown}
                   </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
}
