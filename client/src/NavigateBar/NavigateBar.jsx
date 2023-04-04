import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AutoLogo from '../images/autologo.png';
import '../css/styles.css';



const NavigateBar = () => {
  const [log] = useState(localStorage.getItem("loggedIn"));
  // Behet logout
  const logout = () => {
    localStorage.removeItem("loggedIn");
  };
  
  return (
    <>
      <Navbar className="bgNavColor" expand="lg" >
        <Container>
        <Navbar.Brand>
            <img
              alt="Main logo"
              src={AutoLogo}
              className="MainLogo"
              // width="350"
              // height="50"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
          <Nav.Link><Link className="navBtns" to="/">Home</Link></Nav.Link>
          <Nav.Link><Link className="navBtns" to="/shop">Shop</Link></Nav.Link>
          <Nav.Link><Link className="navBtns" to="/about">About</Link></Nav.Link>
          <Nav.Link><Link className="navBtns" to="/contactus">Contact Us</Link></Nav.Link>

              {!log ? (
                <>
                  <Nav.Link href="/login" ><p className="userLoginBtns">Login</p></Nav.Link>
                  <Nav.Link href="/register" ><p className="userLoginBtns">Register</p></Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/createVehicle"><p className="userLoginBtns">CreateVehicle</p></Nav.Link>
                  <Nav.Link href="/" onClick={logout}>
                  <p className="userLoginBtns">Logout</p>
                  </Nav.Link>
                </>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigateBar;

