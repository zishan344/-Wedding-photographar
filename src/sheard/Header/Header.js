import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        sticky="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              style={{ maxWidth: "270px" }}
              src="https://max-webs.site/marketing/photographer/img/logo-white.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="home#services">Services </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About me
              </Nav.Link>
              {user ? (
                <Nav.Link onClick={() => signOut(auth)} as={Link} to="/login">
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
