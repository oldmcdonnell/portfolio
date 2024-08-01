import { Link } from "react-router-dom";
import selfie from '../img/selfie.jpg';
import Email from '../img/Email.svg';
import Github from '../img/Github.svg';
import Instagram from '../img/Instagram.svg';
import { Container, Row, Col } from "react-bootstrap";
import './App.css'; // Use App.css for all styles

function Contact() {
  return (
    <Container className="text-center p-5">
      <Link to='/'>
        <img src={selfie} alt="Profile" className="profileImage rounded-circle mb-3" />
      </Link>
      <h1 className="text-light">Contact</h1>

      <Row className="justify-content-center mt-4">
        <Col xs={6} md={4} className="p-2 icon-container">
          <a href="mailto:oldmcdonnell@gmail.com">
            <img src={Email} alt="Email" className="iconStyle" />
          </a>
        </Col>
        <Col xs={6} md={4} className="p-2 icon-container">
          <a href="https://www.linkedin.com/in/mcdonnell-eoin/">
            <i className="fa-brands fa-linkedin awesomeIcon"></i>
          </a>
        </Col>
        <Col xs={6} md={4} className="p-2 icon-container">
          <a href="https://github.com/oldmcdonnell">
            <img src={Github} alt="GitHub" className="iconStyle" />
          </a>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={6} md={4} className="p-2 icon-container">
          <a href="https://instagram.com/mcdonnell.eoin/">
            <img src={Instagram} alt="Instagram" className="iconStyle" />
          </a>
        </Col>
        <Col xs={6} md={4} className="p-2 icon-container">
          <a href="https://www.deviantart.com/aliramojo">
            <i className="fa-brands fa-deviantart awesomeIcon"></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
