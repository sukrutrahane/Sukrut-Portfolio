import React from "react";
import Card from "react-bootstrap/Card";
import { ImHeart, ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <br />
          <ul style={{fontSize: "35px"}}>
            <li className="about-activity">
              <ImHeart /> Atención personalizada
            </li>
            <br />
            <li className="about-activity">
              <ImHeart /> Máximo un perrito por estadía
            </li>
            <br />
            <li className="about-activity">
              <ImHeart /> Reporte diario
            </li>
            <br />
            <li className="about-activity">
              <ImHeart /> Aceptamos perritos medianos y pequeños
            </li>
            <br />
            <li className="about-activity">
              <ImHeart /> Estamos ubicados en el barrio de Villa Urquiza
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
