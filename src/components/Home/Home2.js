import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> Sobre mi </span> 
            </h1>
            <p className="home-about-body">
            Desde muy chico me inicie en el mundo de la tecnologia y desarrollo de software
              <br />
              <br />
              Comencé investigando por curiosidad y actualmente ya estoy en la etapa final de la carrera de Ingeniería en Sistemas de Información, donde reforcé mis conocimientos en arquitectura de software, metodologías ágiles y tecnologías web modernas.
              <br />
              <br />
              Laboralmente mi perfil es el de Analista Desarrollador Backend usando tecnologías como ASP.NET, C#, .NET Framework y SQL Server. Por otro lado tambien me ha tocado contruir APIs RESTful en .NET. Tambien tengo experiencia como Analista Funcional utilizando metogologias agiles y con mucho uso de base de datos SQL y documentacion.
              <br />
              <br />
              Me interesa todo lo que impulse la innovación: desde soluciones backend eficientes hasta ideas relacionadas con inteligencia artificial. 
              <br />
              <br />
              Siempre estoy buscando desafíos donde pueda seguir aprendiendo, aportar valor y crecer como profesional.
              
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Encontrame en</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/agustinodetti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/agustinodetti/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/agustinodetti"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
