import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoutLink from "../../components/logout/Logout";
import "../../assets/styles/navbar.scss"; 
import BrandName from "../brand/Brand"

// TODO: Make Let's Go & Profile links only available when logged in. 
// TODO: Replace Login/Register with Logout when signed in

const NavBar = () => {
  if (localStorage.getItem("__token__")) {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand ><Link to="/"><BrandName/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="nav-link" to="/letsgo" alt="home">Let's Go</Link> 
            <Link className="nav-link" to="/profile" alt="home">Profile</Link>
            <Link className="nav-link" to="/contact" alt="contact">Contact</Link>
            <LogoutLink/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand><Link to="/">Carbon FX</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/login" alt="login">Login</Link>
          <Link className="nav-link" to="/register" alt="register">Register</Link>
          <Link className="nav-link" to="/contact" alt="contact">Contact</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
