import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import "./Styles/Navbar.css";

function BasicExample({ Links }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mx-auto">
      <Container>
        {/* <Navbar.Brand>lorem</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {Links.map((element, i) => (
              <NavLink
                key={i}
                to={element.link}
                className="link-style"
                onClick={() => {}}
              >
                {element.title}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
