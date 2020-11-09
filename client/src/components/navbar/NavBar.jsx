import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="./">Project III</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav-link" to="./" alt="home">Home</Link>
          <Link className="nav-link" to="./contact" alt="contact">Contact</Link>
          <Link className="nav-link" to="./login" alt="login">Login</Link>
          <Link className="nav-link" to="./register" alt="register">Register</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
