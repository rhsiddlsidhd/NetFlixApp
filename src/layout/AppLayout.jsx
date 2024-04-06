import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link } from "react-router-dom";

import "./AppLayout.style.css";

const AppLayout = () => {
  const imgPath = process.env.REACT_APP_IMAGE_PATH;

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
          <img
            src={`${imgPath}/Netflix_Logo_RGB.png`}
            height="30"
            className="d-inline-block align-top"
            alt="Navbar Logo"
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                className="homenav"
                style={{ color: "white" }}
                as={Link}
                to="/"
              >
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} as={Link} to="/movies">
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-describedby="btnGroupAddon2"
                bg="dark"
                data-bs-theme="dark"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default AppLayout;
