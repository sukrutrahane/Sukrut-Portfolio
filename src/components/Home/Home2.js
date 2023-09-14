import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineWhatsApp,
} from "react-icons/ai";
import gabyPerfil from "../../Assets/gabyPerfil.jpg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{justifyContent: "center"}}>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img  style={{ borderRadius: "200px" }} src={gabyPerfil} className="img-fluid border-violeta" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 className="purple" id="contactame">CONTACTAME</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a style={{backgroundColor: "white"}}
                  href="https://wa.me/1144217241/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
