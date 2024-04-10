import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./AppLayout.style.css";

/**
 * 페이지 네이션
 * keyword 검색시 params 로 page 1 넘겨주기
 *
 */

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
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
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
    </div>
  );
};

export default AppLayout;
