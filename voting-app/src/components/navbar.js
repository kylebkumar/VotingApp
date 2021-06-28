import React from "react";
import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import "./navbar.css";
import { useAuth } from '../contexts/AuthContext';

export default function NavBar(){
    const { currentUser, logout } = useAuth()  
    const currentUserComp = 
    <div> 
        <Container className = "center-align w-50">
            Current User: { currentUser && currentUser.email }
        </Container>
    </div>    
        return (
            <Navbar className="navigation" variant="light" expand="lg">
                <Navbar.Brand className="title" href="/">Go Vote!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="ml-auto">
                    <Container style={{ minWidth:"5em", justifyContent:"flex-end" }} className = "">
                
                        {!currentUser && <Button href="/login" className="" variant="primary">Log In</Button>}
                   
                    </Container>
                    <Container style={{ minWidth:"8em", justifyContent:"flex-end" }} className = "">
                        {!currentUser  && <Button href="/signup" variant="primary">Sign Up</Button>}
                    </Container>
                    {currentUser && currentUserComp }
                    {currentUser && <Button onClick= { logout } variant="link">Log Out</Button>}
                   </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
}
