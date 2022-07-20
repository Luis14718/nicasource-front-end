import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg';
import { useEffect } from 'react';
import {Skeleton} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { loadMenusAsync } from '../../redux/reducers/menus/menus.thunks';



export default function Navigation() {

    const dispatch = useDispatch();
    const { isLoading, menus, errorMessage } = useSelector((state) => state.menus);
    useEffect(
        () => {
            dispatch(loadMenusAsync());
        }, []
    );


    return (
        <Navbar collapseOnSelect expand="md" >
            <Container>
                <Navbar.Brand href="#home">
                    <img className="header-logo" src={logo} alt="Nicasource" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto align-items-center navmenu">
                    <Nav.Link key="home" className="item-menu active">Home</Nav.Link>
                    {isLoading && <Skeleton />}
                    {errorMessage && <h3>{errorMessage}</h3>}
                    {menus && menus.map((menu) =><Nav.Link key={menu.id} className="item-menu">{menu.title}</Nav.Link>)}
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