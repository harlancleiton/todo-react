import React, {Component} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
                <LinkContainer to="/"><Navbar.Brand>Minhas Tarefas</Navbar.Brand></LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <LinkContainer to="/todos">
                            <Nav.Link>Tarefas</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>Sobre</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
