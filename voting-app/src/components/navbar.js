import React from "react";
import {Navbar, Nav, Button} from 'react-bootstrap';
import "./navbar.css";
import { useAuth } from '../contexts/AuthContext';

export default function NavBar(){
    const { currentUser, logout } = useAuth()        
        return (
            <Navbar className="navigation" variant="light" expand="lg">
                <Navbar.Brand className="title" href="/">HykeTrack</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="ml-auto">
                     {!currentUser && <Button href="/login" className="mr-sm-3" variant="success">Log In</Button>}
                     {!currentUser  && <Button href="/signup" variant="success">Sign Up</Button>}
                    {currentUser && <Button onClick= { logout } variant="success">Log Out</Button>}
                   </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
}
