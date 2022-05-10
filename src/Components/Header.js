import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from './logo7.png'
import FormCheckLabel from "react-bootstrap/FormCheckLabel";
import {BrowserRouter as Router, Routes, Route,  Link } from "react-router-dom";

import Home from '../Pages/Home';
import Blog from '../Pages/Blog';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';

class Header extends Component {
    render() {
        return (
            <>


            <Navbar  sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
                   <Navbar.Brand  href="/">
                       <img
                           src={logo}
                           height="40"
                           width="40"
                           className="d-inline-block align-top mx-2"
                           alt="Logo"
                       />
                   </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>
                        <Nav className="mx-2">
                            <Button variant="success"  className="d-inline me-2 " >Log In</Button>
                            <Button variant="success" className="d-inline me-2" >Sign out</Button>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>


            <Router>
                <Routes>

                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/blog' element={<Blog/>}/>
                </Routes>
            </Router>
            </>
        );
    }
}

export default Header;