import React from 'react'
import {Nav, Navbar } from 'react-bootstrap'

export default function Header(props) {
  return (
<div>
  <Navbar bg="dark" variant="dark">

    <Navbar.Brand  className='mx-5' href="#home">{props.title}</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>

  </Navbar>

  </div>
  )
}
