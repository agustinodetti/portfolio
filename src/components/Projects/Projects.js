import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos son algunso de los poryectos en los que estuve trabajando recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Aplicacion de gestion"
              description="Aplicacion de gestion de entidades (CRUD) con estructura MVC"
              ghLink="https://github.com/agustinodetti/CRUDmvc"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Aplicacion web + Servicios"
              description="El propósito de este proyecto es ilustrar la integración de una API RESTful con una aplicación web ASP.NET, brindando un entorno práctico para probar solicitudes y respuestas entre ambas soluciones."
              ghLink="https://github.com/agustinodetti/website"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="API Local"
              description="API RESTful local."
              ghLink="https://github.com/agustinodetti/localAPI"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="API Externa"
              description="API externa configurada para utilizar sus endpoints."
              ghLink="https://github.com/agustinodetti/webAPI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Registrador financiero web"
              description="Aplicacion web para gestionar activos financieros."
              ghLink="https://github.com/agustinodetti/registradorFinancieroWeb"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
