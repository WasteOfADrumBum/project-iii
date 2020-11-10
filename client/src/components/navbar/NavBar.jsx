import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// TODO: Make My Places, Let's Go & Profile links only available when logged in. 

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="./">Project III</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav-link" to="./letsgo" alt="home">Let's Go</Link> 
          <Link className="nav-link" to="./myplaces" alt="home">My Places</Link>
          <Link className="nav-link" to="./profile" alt="home">Profile</Link>
          <Link className="nav-link" to="./contact" alt="contact">Contact</Link>
          <Link className="nav-link" to="./login" alt="login">Login</Link>
          <Link className="nav-link" to="./register" alt="register">Register</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
