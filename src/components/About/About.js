import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import gaby from "../../Assets/gaby_photo.jpeg";

import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "3.1em", paddingBottom: "20px" }}>
              <strong className="purple">Petit hotel canino</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              // overflow: "hidden",
              // paddingTop: "30px",
              // paddingBottom: "30px",
            }}
            className="about-img circular-image"
          >
            {/* <Tilt>
              <img
                style={{ height: "450px", width: "450px" }}
                src={gaby}
                alt="about"
                className="img-fluid rounded-circle"
              />
            </Tilt> */}
            <Tilt>
              <img
                style={{ borderRadius: "200px", marginTop: "10px", marginBottom: "50px" }}
                src={gaby}
                className="img-fluid border-violeta"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <h1 style={{marginTop: "100px"}} className="project-heading">
          Algunos de nuestros{" "}
          <strong id="huespedes" style={{ color: "violet" }}>HUESPEDES </strong>
        </h1>

        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
