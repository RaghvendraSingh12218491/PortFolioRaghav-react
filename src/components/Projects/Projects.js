import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import portfolio from "../../Assets/Projects/portfolio.webp";
import food from "../../Assets/Projects/food.webp";
import house from "../../Assets/Projects/house.jpeg";
import book from "../../Assets/Projects/book.jpg";
import car from "../../Assets/Projects/car.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              isBlog={false}
              title="Yadav Stationary"
              description="Yadav Stationary is a user-friendly bookstore website offering a wide range of books, stationery, and educational resources. It provides a seamless shopping experience for book lovers, students, and professionals."
              ghLink="https://github.com/RaghvendraSingh12218491/e-bookstore"
              demoLink="https://raghvendrasingh12218491.github.io/e-bookstore/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Classic-Cars"
              description="Developed a responsive car website using HTML, CSS, and JavaScript. Focused on clean design, user-friendly navigation, and dynamic interactivity."
              ghLink="https://github.com/RaghvendraSingh12218491/Cars"
              demoLink="https://raghvendrasingh12218491.github.io/Cars/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Website"
              description="Built a modern food website using HTML, CSS, and JavaScript. Emphasized appealing visuals, smooth layout, and interactive user experience."
              ghLink="https://github.com/RaghvendraSingh12218491/Foods"
              demoLink="https://raghvendrasingh12218491.github.io/Foods/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="Architect Website"
              description="Designed and developed an architect website using HTML, CSS, and JavaScript. Focused on showcasing projects with a clean, professional layout and smooth user experience."
              ghLink="https://github.com/RaghvendraSingh12218491/architect-website"
              demoLink="https://raghvendrasingh12218491.github.io/architect-website/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="This is my personal portfolio built with React.js to showcase my skills, projects, and experience as a Full Stack Developer."
              ghLink="https://github.com/RaghvendraSingh12218491/portfoilio-react"
              demoLink="https://raghvendrasingh12218491.github.io/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
