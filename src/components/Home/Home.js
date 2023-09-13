import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mainPhoto from "../../Assets/main-photo.jpeg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About.js";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "35px" }}
                className="heading"
              >
                Hola!!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1
                style={{ paddingBottom: 15, fontSize: "35px" }}
                className="heading-name"
              >
                Bienvenidos a{" "}
                <strong className="main-name"> La casita Lalo y Nala" </strong>
              </h1>
              <br />
              <h1 className="heading-name">
                <p style={{ fontSize: "35px" }}>
                  Mi nombre es <strong className="main-name"> Gabriela </strong>
                  , en "La casita de Lalo y Nala" cuidamos a los perritos cuando
                  sus humanos se van de vacaciones o requieran algunos días de
                  cuidado.
                </p>
                {/* <strong className="main-name"> Gabriela </strong> */}
              </h1>
              <div style={{ padding: 50, textAlign: "left", fontSize: "20px", marginBottom: "10px"}}>
                <Type/>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, textAlign: "center", marginTop: "100px" }}>
              <img
                src={mainPhoto}
                alt="home pic"
                className="img-fluid"
                // style={{ maxHeight: "550px", borderRadius: "50%" }}
                style={{ height: "450px", width: "450px", borderRadius: "50%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Home2 />
    </section>
  );
}

export default Home;
