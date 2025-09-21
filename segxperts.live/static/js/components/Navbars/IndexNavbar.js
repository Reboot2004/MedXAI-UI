import React from "react";
import { Link, useNavigate } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []);

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={"fixed-top "}
        expand="lg"
        color="navbar-custom" // Update color to navbar-custom
        style={{ backgroundColor: "#191970", height: "70px" }} // Change background color to #191970
      >
        <Container>
          <div>
            <NavbarBrand href="/index" id="navbar-brand">
              <img
                src={require("assets/img/logo_title.png")}
                style={{ width: "90px", height: "70px" }}
              ></img>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed by SegXperts
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
              style={{ height: "80px" }}
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="/index">
                  <i></i>
                  <p>Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/usermanual">
                  <i></i>
                  <p>User Manual</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/about">
                  <i></i>
                  <p>About us</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="/segmentation"
                  // target="_blank"
                  id="twitter-tooltip"
                  onClick={() => navigate("/segmentation")}
                >
                  <i className="fa fa-rocket fa-2x" aria-hidden="true"></i>
                  <p className="d-lg-none d-xl-none">Try Now</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Try Now
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
