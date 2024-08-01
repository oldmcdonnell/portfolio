import React from 'react';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Email from '../img/Email.svg';
import Github from '../img/Github.svg';
import './App.css'; // Use App.css for all styles

function Footer() {
  return (
    <footer className="footer bg-light text-center p-3">
      <Container>
        <div className="row justify-content-center">
          <div className="col-6 col-sm-4">
            <Link to="/contact">
              <img src={Email} alt="Email" className="footerIcon" />
            </Link>
          </div>
          <div className="col-6 col-sm-4">
            <a href="https://www.linkedin.com/in/mcdonnell-eoin/">
              <i className="fa-brands fa-linkedin footerAwesomeIcon"></i>
            </a>
          </div>
          <div className="col-6 col-sm-4">
            <Link to="/contact">
              <img src={Github} alt="GitHub" className="footerIcon" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
