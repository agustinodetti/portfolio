import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Soy <span className="purple">Agustin Odetti </span>
            de <span className="purple"> Cordoba, Argentina.</span>
            <br />
            Actualmente estoy trabajando como analista desarrollador backend en Encode SA.
            <br />
            Por otro lado, soy estudiante de la carrera profesional Ingenieria en sistemas de informacion de la UTN FRC.
            <br />
            <br />
            Aparte del desarrollo de software, hay otras actividades que disfruto mucho:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Competir en karting
            </li>
            <li className="about-activity">
              <ImPointRight /> Videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar y conocer nuevos lugares
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Al pan pan y al vino me lo tomo"{" "}
          </p>
          <footer className="blockquote-footer">El ode MC</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
