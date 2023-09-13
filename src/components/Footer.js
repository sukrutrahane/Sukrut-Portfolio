import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  // function handleInicio(params) {
  //   const irInicio = document.getElementById("home");
  //   irInicio.scrollIntoView({ behavior: "smooth", block: "start" });
  // }

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} </h3>
            <h3>
              Core:{" "}
              <a href="https://github.com/sukrutrahane/Sukrut-Portfolio">
                Sukrut Rahane
              </a>{" "}
              || <span> Design: Fernando Valls</span>
            </h3>
          </Col>
          {/* <a href="#">
            <img 
              onClick={handleInicio}
              src={inicio}
              style={{ backgroundColor: "violet", borderRadius: "30px" }}
            />
          </a> */}
        </section>
        {/* <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/sukrutrahane"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/sukrutrahane"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sukrutrahane/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/sukrutrahane"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col> */}
      </Row>
    </Container>
  );
}

export default Footer;
