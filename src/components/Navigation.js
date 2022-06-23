import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand >Country App</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink  to="/" className="mx-2 text-decoration-none text-white">Home</NavLink>
      <NavLink  to="/about" className="mx-2 text-decoration-none text-white">About</NavLink>
    </Nav>
    </Container>
  </Navbar>
  )
}
