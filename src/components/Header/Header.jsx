import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" className="navbar-dark">
                <Container>
                    <Navbar.Brand>
                        <NavLink className="navbar-brand" to="/" exact>Blog</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavLink className="nav-link" to="/" exact>Home</NavLink>
                            <NavLink className="nav-link" to="/blog" exact>Blog</NavLink>
                            <NavLink className="nav-link" to="/blog/addpost">Add Post</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
