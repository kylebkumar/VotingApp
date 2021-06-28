import React from "react";
import { Navbar, Nav, Button, Container} from 'react-bootstrap';
import "./navbar.css";
import { useAuth } from '../contexts/AuthContext';

export default function NavBar(){
    const { currentUser, logout } = useAuth()  
    const currentUserComp = 
    <div> 
        <Container className = "center-align w-50">
            <p style={{color:"white"}}>Current User: { currentUser && currentUser.email }</p>
        </Container>
    </div>    
        return (
            <Navbar className="navigation" variant="light" expand="lg">
                <Navbar.Brand className="title" href="/">Go Vote!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="ml-auto">
                    <Container className = "align-items-end justify-content-end">
                        {!currentUser && <Button href="/login" variant="link">Log In</Button>}
                        {!currentUser && <Button href="/signup" variant="primary">Sign Up</Button>}
                        {currentUser && currentUserComp }
                        {currentUser && <Button onClick= { logout } variant="link">Log Out</Button>}
                    </Container>
                    
                   </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
}
