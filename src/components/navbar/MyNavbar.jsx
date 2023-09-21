import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import MyLogo from "../myLogo/MyLogo";

const MyNavbar = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Navbar
      className="border-bottom shadow"
      bg="success"
      expand="md"
      fixed="top"
    >
      <Container>
        <Link to="/" onClick={handleLogoClick}>
          <MyLogo />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className="nav-link fs-4 me-5 text-white"
              to="/"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
              onClick={handleLogoClick}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link fs-4 me-4 text-white"
              to="/About"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              About
            </NavLink>
            <a
              href="https://github.com/Cakirfan"
              className="nav-link fs-4 text-white"
              target="_blank"
              rel="noreferrer"
            >
              👉 Github
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
