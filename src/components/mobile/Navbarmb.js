import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Navbarmb = () => {
  return (
    <>
        <Navbar className='mynavbarmb' id="mynavbar" expand="lg">
        <Container>
        <Navbar.Brand href="#home"><Link to="/"><img src="./assets/images/homepage/logo.png" alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/about">About</Link>
            <Link className='nav-link' to="/services">Services</Link>
            <Link className='nav-link' to="/portfolio">Portfolio</Link>
            <Link className='nav-link' to="/pricing">Pricing</Link>
            <Link className='nav-link' to="/blog">Blog</Link>
            <Link className='nav-link' to="/contact">Contact</Link>
            
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  )
}

export default Navbarmb