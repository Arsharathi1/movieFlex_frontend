import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand>
            <Link to="/" className="text-white text-decoration-none mx-3">Movie Flex</Link>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-white text-decoration-none mx-3">Home</Link>
            <Link to="movies-list" className="text-white text-decoration-none mx-3">Movie List</Link>
            <Link to="#link" className="text-white text-decoration-none mx-3">About us</Link>
            <Link to="#link" className="text-white text-decoration-none mx-3">Contact us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar