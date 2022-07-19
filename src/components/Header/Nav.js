import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg';



export default function Navigation() {


    return (
        <Navbar collapseOnSelect expand="md" >
            <Container>
                <Navbar.Brand href="#home">
                    <img className="header-logo" src={logo} alt="Nicasource" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto align-items-center navmenu">
                        <Nav.Link className="item-menu active">Home</Nav.Link>
                        <Nav.Link className="item-menu">About</Nav.Link>
                        <Nav.Link className="item-menu">Episodes</Nav.Link>
                        <Nav.Link className="item-menu">Blog</Nav.Link>
                        <Nav.Link className="item-menu">Contact</Nav.Link>
                    </Nav>
                    <Nav >
                        <Nav.Link className="mobile-btn" >
                            <button className="btn primary-btn ">Subscribe</button></Nav.Link>
                        <Nav.Link className="mobile-btn">
                            <button className="btn secondary-btn ">Sign-in</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}