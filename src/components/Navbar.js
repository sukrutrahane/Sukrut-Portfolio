import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import PetsIcon from '@mui/icons-material/Pets';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    switch (newValue) {
      case "contacto":
        // Desplaza la página al elemento con el ID "test"
        const contactame = document.getElementById("contactame");
        contactame.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      // Agrega casos adicionales para otros botones
      case "huespedes":
        const huespedes = document.getElementById("huespedes");
        huespedes.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
    }
    setValue(newValue);
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      value={value}
      className={navColour ? "sticky" : "navbar"}
    >
      <Container style={{fontSize: "30px"}}>
        <Navbar.Brand href="/" className="d-flex"></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                value="contacto"
                as={Link}
                to="/"
                onClick={(event) => {
                  updateExpanded(false);
                  handleChange(event, "contacto"); // Pasar el valor correspondiente
                }}
              >
                <WhatsAppIcon style={{ marginBottom: "2px", fontSize: "35px", color: "violet" }} /> Contacto
              </Nav.Link>
            </Nav.Item>
  
            <Nav.Item>
              <Nav.Link
                value="huespedes"
                as={Link}
                to="/"
                onClick={(event) => {
                  updateExpanded(false);
                  handleChange(event, "huespedes"); // Pasar el valor correspondiente
                }}
              >
                <PetsIcon style={{ marginBottom: "2px", fontSize: "35px", color: "violet" }} /> Huespedes
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default NavBar;
