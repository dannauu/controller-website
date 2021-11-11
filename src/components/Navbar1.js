import React from 'react'
import { NavDropdown, Nav, Navbar, } from 'react-bootstrap'
import '../App.css'
import SearchBar from '../components/SearchBar'

const Navbar1 = () => {
    return (
        <div>
            <Navbar className='navbar' expand="lg">
                    <Navbar.Brand href="#home" className='logo'>Brycen's Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/games">Games</Nav.Link>
                            <Nav.Link href="/games">Players</Nav.Link>
                            <NavDropdown title="Account">
                                <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Edit Account</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Support">
                                <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Frequently Asked Questions</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">About Us</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <SearchBar />
                        <Nav>
                            <Nav.Link href="#link">Sign In</Nav.Link>
                            <Nav.Link href="#link">Sign Up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbar1
