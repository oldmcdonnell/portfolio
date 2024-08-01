import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import CV from '../img/CV_2024_07_08.pdf';
import SnailKnightJousting from '../img/SnailKnightsJousting.jpg';

function About() {
  return (
    <Container className="about-container mx-auto p-5">
      <Row>
        <Col>
          <section className="about-section p-5">
            <header>
              <Link to='/' className="back-link">{'<- Back'}</Link>
              <h1>About Me</h1>
            </header>
            <article>
              <p>My name is Eoin McDonnell.</p>
              <p>
                I am a full stack developer with extensive experience in database
                recovery, assistance, building, and maintenance. After several years
                of programming, I am now focused on building the applications I used
                to support.
              </p>
              <p>
                My specialties include SQL, Python, and modern JavaScript frameworks
                such as React, along with REST and SOAP APIs. Originally from Dublin,
                Ireland, I hold dual citizenship and am an avid runner.
              </p>
            </article>
            <footer className="cv-content">
              <a href={CV} target="_blank" rel="noopener noreferrer" className="cv-link">
                View CV (PDF)
              </a>
            </footer>
          </section>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <img src={SnailKnightJousting} alt="Snail Knight Jousting" className="img-fluid snail-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
