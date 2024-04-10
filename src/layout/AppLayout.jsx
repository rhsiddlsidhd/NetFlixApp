import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./AppLayout.style.css";

const AppLayout = () => {
  const imgPath = process.env.REACT_APP_IMAGE_PATH;
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const searchByKeyword = (e) => {
    e.preventDefault();
    // url을 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  const logoClick = () => {
    navigate(`/`);
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="md">
        <Container fluid className="navbar_container">
          <img
            src={`${imgPath}/Netflix_Logo_RGB.png`}
            height="30"
            className="d-inline-block align-top"
            alt="Navbar Logo"
            onClick={logoClick}
            style={{ cursor: "pointer" }}
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 " navbarScroll>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/movies">
                Movies
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-describedby="btnGroupAddon2"
                bg="dark"
                data-bs-theme="dark"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Button variant="outline-danger" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default AppLayout;
